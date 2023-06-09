import { Page } from "@playwright/test";

export class RobotAppPage {
  page: Page;

  constructor(page) {
    this.page = page;
  }

  async startApp() {
    await this.page.goto("/");
    await this.page.getByText("Start your Vacuum Robot!");
    await this.page.getByText("Get Started").click();
  }

  async selectDirection(direction: "NORTH" | "SOUTH" | "EAST" | "WEST") {
    const DIRECTION_ICONS = {
      NORTH: "ArrowCircleUpTwoToneIcon",
      SOUTH: "ArrowCircleDownTwoToneIcon",
      EAST: "ArrowCircleRightTwoToneIcon",
      WEST: "ArrowCircleLeftTwoToneIcon",
    };
    await this.page.getByTestId(DIRECTION_ICONS[direction]).click();
  }

  async place(coordinates: Coordinates, direction: Direction) {
    await this.page.getByTestId(`cell-${coordinates.x}${coordinates.y}`).click();
    await this.selectDirection(direction);
  }

  async move() {
    await this.page.getByText("Move").click();
  }

  async rotateLeft() {
    await this.page.getByText("Left").click();
  }

  async rotateRight() {
    await this.page.getByText("Right").click();
  }

  async report() {
    await this.page.getByText("Report").click();
    const result = await this.page.getByTestId("result").textContent();
    await this.page.getByText("Close").click();
    return result;
  }

  async parseCommands(commands: TestCommand[]) {
    for (const command of commands) {
      switch (command.commandKeyword) {
        case "PLACE":
          const { coordinates, direction } = command as PlaceCommand;
          await this.place(coordinates, direction);
          break;
        case "MOVE":
          await this.move();
          break;
        case "LEFT":
          await this.rotateLeft();
          break;
        case "RIGHT":
          await this.rotateRight();
          break;
        case "REPORT":
          await this.report();
          break;
      }
    }
    return await this.report();
  }
}
