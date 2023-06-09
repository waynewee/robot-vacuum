import { Coordinates, Robot, RobotGrid } from "./types";

describe("RobotGrid", () => {
  it("initializes grid with same width and height", () => {
    const robotGrid = new RobotGrid(5, 5);
    expect(robotGrid.grid.length).toEqual(5);
    expect(robotGrid.grid[0].length).toEqual(5);
  });

  it("initializes grid with different width and height", () => {
    const robotGrid = new RobotGrid(29, 123);
    expect(robotGrid.grid.length).toEqual(29);
    expect(robotGrid.grid[0].length).toEqual(123);
  });

  it("checks if out-of-bounds coordinates is within bounds", () => {
    const coordinates: Coordinates = { x: 10, y: 10 };
    const robotGrid = new RobotGrid(5, 5);
    expect(robotGrid.isValidWithinBounds(coordinates)).toEqual(false);
  });

  it("checks if within-bounds coordinates is within bounds", () => {
    const coordinates: Coordinates = { x: 4, y: 4 };
    const robotGrid = new RobotGrid(5, 5);
    expect(robotGrid.isValidWithinBounds(coordinates)).toEqual(true);
  });
});

describe("Robot", () => {
  it("places robot with correct direction and rotation", () => {
    const robot = new Robot();
    robot.place("SOUTH", { x: 2, y: 3 });
    expect(robot.state.placed).toEqual(true);
    expect(robot.state.coordinates.x).toEqual(2);
    expect(robot.state.coordinates.y).toEqual(3);
    expect(robot.state.direction).toEqual("SOUTH");
    expect(robot.state.rotation).toEqual(180);
  });

  it("rotates robot right", () => {
    const robot = new Robot();
    robot.place("NORTH", { x: 0, y: 0 });
    robot.rotateRight();
    expect(robot.state.direction).toEqual("EAST");
    expect(robot.state.rotation).toEqual(90);
  });

  it("rotates robot left", () => {
    const robot = new Robot();
    robot.place("WEST", { x: 5, y: 10 });
    robot.rotateLeft();
    expect(robot.state.direction).toEqual("SOUTH");
    expect(robot.state.rotation).toEqual(180);
  });
});
