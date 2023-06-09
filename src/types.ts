export type Coordinates = {
  x: number;
  y: number;
};

type GridRow = Coordinates[];

export class RobotGrid {
  width: number;
  height: number;

  grid: GridRow[];

  CELL_WIDTH_XS = 60;
  CELL_WIDTH_MD = 100;
  CELL_WIDTH_LG = 140;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.grid = this.initializeGrid(width, height);
  }

  initializeGrid(width: number, height: number): GridRow[] {
    return Array.from(Array(width)).reduce((acc, _, y) => {
      acc.push(
        Array.from(Array(height)).map((_, x) => {
          return { x, y: height - 1 - y };
        })
      );
      return acc;
    }, []);
  }

  isValidWithinBounds(coordinates: Coordinates) {
    return coordinates.x >= 0 && coordinates.x < this.width && coordinates.y >= 0 && coordinates.y < this.height;
  }
}

export type Direction = "NORTH" | "SOUTH" | "EAST" | "WEST";

export class Robot {
  state: {
    placed: boolean;
    coordinates: Coordinates;
    direction: Direction;
    rotation: number;
  };

  sizeXs = "24px";
  sizeMd = "48px";
  sizeLg = "60px";

  constructor() {
    this.state = {
      placed: false,
      coordinates: { x: 0, y: 0 },
      direction: "NORTH",
      rotation: 0,
    };
  }

  setCoordinates(coordinates: Coordinates) {
    this.state.coordinates = coordinates;
  }

  setDirection(direction: Direction) {
    this.state.direction = direction;
  }

  setRotation(rotation: number) {
    this.state.rotation = rotation;
  }

  setPlaced() {
    this.state.placed = true;
  }

  initializeRotation(direction: Direction) {
    switch (direction) {
      case "NORTH":
        this.setRotation(0);
        break;
      case "EAST":
        this.setRotation(90);
        break;
      case "SOUTH":
        this.setRotation(180);
        break;
      case "WEST":
        this.setRotation(270);
        break;
    }
  }

  place(direction: Direction, coordinates: Coordinates) {
    this.setPlaced();
    this.setDirection(direction);
    this.initializeRotation(direction);
    this.setCoordinates(coordinates);
  }

  rotateLeft() {
    this.setRotation(this.state.rotation - 90);
    switch (this.state.direction) {
      case "NORTH":
        this.setDirection("WEST");
        return;
      case "WEST":
        this.setDirection("SOUTH");
        return;
      case "SOUTH":
        this.setDirection("EAST");
        return;
      case "EAST":
        this.setDirection("NORTH");
        return;
    }
  }

  rotateRight() {
    this.setRotation(this.state.rotation + 90);
    switch (this.state.direction) {
      case "NORTH":
        this.setDirection("EAST");
        return;
      case "EAST":
        this.setDirection("SOUTH");
        return;
      case "SOUTH":
        this.setDirection("WEST");
        return;
      case "WEST":
        this.setDirection("NORTH");
        return;
    }
  }

  move(robotGrid: RobotGrid) {
    if (!this.state.placed) {
      throw new Error("The robot has not been placed.");
    }
    let nextCoordinates = { ...this.state.coordinates };
    switch (this.state.direction) {
      case "NORTH":
        nextCoordinates.y += 1;
        break;
      case "SOUTH":
        nextCoordinates.y -= 1;
        break;
      case "EAST":
        nextCoordinates.x += 1;
        break;
      case "WEST":
        nextCoordinates.x -= 1;
        break;
    }
    if (robotGrid.isValidWithinBounds(nextCoordinates)) {
      this.state.coordinates = nextCoordinates;
    } else {
      throw new Error("The robot is not allowed to go out of bounds.");
    }
  }
}
