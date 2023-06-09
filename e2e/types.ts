type CommandKeyword = "PLACE" | "MOVE" | "LEFT" | "RIGHT" | "REPORT";
type Direction = "NORTH" | "SOUTH" | "EAST" | "WEST";
type Coordinates = { x: number; y: number };

type TestCommand = PlaceCommand | Command;
type Test = { title: string; commands: TestCommand[]; result: string };

class Command {
  commandKeyword: CommandKeyword;

  constructor(commandKeyword: CommandKeyword) {
    this.commandKeyword = commandKeyword;
  }
}

class PlaceCommand extends Command {
  direction: Direction;
  coordinates: Coordinates;

  constructor(direction: Direction, coordinates: Coordinates) {
    super("PLACE");
    this.coordinates = coordinates;
    this.direction = direction;
  }
}
