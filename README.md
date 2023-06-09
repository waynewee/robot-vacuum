# Robot Vacuum

## Overview
The application is a simulation of a robot vacuum moving in an area of dimensions 5 units by 5 units.

The web interface can take following commands:

- PLACE X,Y,F
- MOVE
- LEFT
- RIGHT
- REPORT

## Stack
React + Typescript + Material UI + Jest (Unit Tests) + Playwright (E2E Tests)

## Getting Started
The app is hosted using GitHub Pages at https://waynewee.github.io/robot-vacuum/

**PLACE** the robot by clicking on any cell in the grid

**MOVE**, **LEFT**, **RIGHT** and **REPORT** by clicking the respective buttons


## Development
### Testing
#### Run locally
`git clone https://github.com/waynewee/robot-vacuum.git`

`cd robot-vacuum`

`npm install`

`npm run start`

#### Unit tests
`npm run test`

#### E2E tests
Local server: `npm run e2e:dev`

Production server: `npm run e2e:prod`  

Add more tests by modifying the `e2e/tests/tests.ts` file
