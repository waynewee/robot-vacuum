import { Dialog, DialogTitle, Typography, Box, DialogActions, Button, DialogContent } from "@mui/material";
import { useState } from "react";

export const RobotWelcomeDialog = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Start your Vacuum Robot!</DialogTitle>
      <DialogContent>
        <Box paddingY={4}>
          <Typography>Click on any cell in the grid to PLACE your Vacuum Robot.</Typography>
        </Box>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Get Started
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
