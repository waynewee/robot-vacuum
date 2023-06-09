import { test as base, expect } from "@playwright/test";
import { RobotAppPage } from "../pages/robot-app-page";
import { tests } from "./tests";

const test = base.extend<{ robotAppPage: RobotAppPage }>({
  robotAppPage: async ({ page }, use) => {
    const robotAppPage = new RobotAppPage(page);
    await robotAppPage.startApp();
    await use(robotAppPage);
  },
});

tests.forEach(async ({ title, commands, result }) => {
  test(title, async ({ robotAppPage }) => {
    await robotAppPage.startApp();
    expect(await robotAppPage.parseCommands(commands)).toEqual(result);
  });
});
