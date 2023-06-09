import { useState } from "react";

import { Coordinates, Direction, Robot, RobotGrid } from "./types";
import { RobotAvatar } from "./RobotAvatar";
import { Button, Box, Grid, Snackbar, Alert } from "@mui/material";
import { RotateLeft, RotateRight, Campaign } from "@mui/icons-material";
import { RobotGridCell } from "./RobotGridCell";
import { RobotReportDialog } from "./RobotReportDialog";
import { RobotWelcomeDialog } from "./RobotWelcomeDialog";
import { RobotActionButtons } from "./RobotActionButtons";
import { RobotGridDisplay } from "./RobotGridDisplay";

type Props = {
  robotGrid: RobotGrid;
};

const robot = new Robot();

export const RobotApp = ({ robotGrid }: Props) => {
  const [robotState, setRobotState] = useState<Robot["state"]>(robot.state);
  const [showReport, setShowReport] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handlePlace = (coordinates: Coordinates, direction: Direction) => {
    robot.place(direction, coordinates);
    setRobotState({ ...robot.state });
  };

  const handleMove = () => {
    try {
      robot.move(robotGrid);
      setRobotState({ ...robot.state });
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const handleRotateLeft = () => {
    robot.rotateLeft();
    setRobotState({ ...robot.state });
  };

  const handleRotateRight = () => {
    robot.rotateRight();
    setRobotState({ ...robot.state });
  };

  return (
    <>
      <Box>
        <RobotWelcomeDialog />
        <RobotReportDialog open={showReport} onClose={() => setShowReport(false)} robotState={robotState} />
        <Box display={"flex"} justifyContent={"end"}>
          <Button
            disabled={!robotState.placed}
            startIcon={<Campaign />}
            color="secondary"
            variant="contained"
            onClick={() => setShowReport(true)}
          >
            Report
          </Button>
        </Box>
        <Box paddingY={2}>
          <Box position={"relative"}>
            <RobotAvatar robotGrid={robotGrid} robotState={robotState} />
            <RobotGridDisplay robotGrid={robotGrid} onPlace={handlePlace} />
          </Box>
        </Box>
        <RobotActionButtons
          robotState={robotState}
          onRotateLeft={handleRotateLeft}
          onRotateRight={handleRotateRight}
          onMove={handleMove}
        />
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={error.length > 0}
        autoHideDuration={3000}
        onClose={() => setError("")}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};
