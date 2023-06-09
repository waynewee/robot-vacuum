export const tests: Test[] = [
  {
    title: "Simple movement",
    commands: [
      {
        commandKeyword: "PLACE",
        direction: "NORTH",
        coordinates: { x: 0, y: 1 },
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "REPORT",
      },
    ],
    result: "0, 3, EAST",
  },
  {
    title: "Impeded movement",
    commands: [
      {
        commandKeyword: "PLACE",
        direction: "EAST",
        coordinates: { x: 3, y: 4 },
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "LEFT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "REPORT",
      },
    ],
    result: "3, 4, WEST",
  },
  {
    title: "Cover all cells",
    commands: [
      {
        commandKeyword: "PLACE",
        coordinates: { x: 0, y: 0 },
        direction: "NORTH",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "LEFT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "LEFT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "LEFT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "LEFT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
    ],
    result: "4, 4, NORTH",
  },
  {
    title: "Rotate on the spot",
    commands: [
      {
        commandKeyword: "PLACE",
        coordinates: { x: 0, y: 0 },
        direction: "NORTH",
      },
      {
        commandKeyword: "RIGHT",
      },

      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "LEFT",
      },
      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "RIGHT",
      },
    ],
    result: "0, 0, WEST",
  },
  {
    title: "Move and report multiple times",
    commands: [
      {
        commandKeyword: "PLACE",
        coordinates: { x: 0, y: 0 },
        direction: "NORTH",
      },
      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "LEFT",
      },
      {
        commandKeyword: "REPORT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "REPORT",
      },
      {
        commandKeyword: "REPORT",
      },
    ],
    result: "2, 1, NORTH",
  },
  {
    title: "Move and place multiple times",
    commands: [
      {
        commandKeyword: "PLACE",
        coordinates: { x: 0, y: 0 },
        direction: "NORTH",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "PLACE",
        coordinates: { x: 3, y: 2 },
        direction: "EAST",
      },
      {
        commandKeyword: "RIGHT",
      },
      {
        commandKeyword: "MOVE",
      },
      {
        commandKeyword: "LEFT",
      },
    ],
    result: "3, 1, EAST",
  },
];
