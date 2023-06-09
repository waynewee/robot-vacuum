import { Grid, Button } from "@mui/material";
import { RotateLeft, RotateRight } from "@mui/icons-material";
import { Robot } from "./types";

type Props = {
  robotState: Robot["state"];
  onRotateLeft: () => void;
  onRotateRight: () => void;
  onMove: () => void;
};

export const RobotActionButtons = ({ robotState, onRotateLeft, onRotateRight, onMove }: Props) => {
  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item>
        <Button disabled={!robotState.placed} variant="outlined" startIcon={<RotateLeft />} onClick={onRotateLeft}>
          Left
        </Button>
      </Grid>
      <Grid item>
        <Button disabled={!robotState.placed} variant="contained" onClick={onMove}>
          Move
        </Button>
      </Grid>
      <Grid item>
        <Button disabled={!robotState.placed} variant="outlined" startIcon={<RotateRight />} onClick={onRotateRight}>
          RIGHT
        </Button>
      </Grid>
    </Grid>
  );
};
