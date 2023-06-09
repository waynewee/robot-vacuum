import { Dialog, Typography, Box, DialogContent, DialogActions, Button, Card, CardContent } from "@mui/material";
import { Robot } from "./types";

type Props = {
  robotState: Robot["state"];
  open: boolean;
  onClose: () => void;
};

export const RobotReportDialog = ({ robotState, open, onClose }: Props) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Box paddingY={4}>
          {robotState.placed && (
            <Card variant="outlined" sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography textAlign={"center"} data-testid="result" variant="h5" component="div">
                  {robotState.coordinates.x}, {robotState.coordinates.y}, {robotState.direction}
                </Typography>
              </CardContent>
            </Card>
          )}
          <Typography>
            {robotState.placed
              ? `The robot is at X=${robotState.coordinates.x} and Y=${robotState.coordinates.y}, facing ${robotState.direction}`
              : "The robot has not been placed"}
          </Typography>
        </Box>
        <DialogActions>
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
