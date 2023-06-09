import { RobotApp } from "./RobotApp";
import { RobotGrid } from "./types";
import { Box } from "@mui/material";

function App() {
  const robotGrid = new RobotGrid(5, 5);

  return (
    <Box sx={{ overflowX: "hidden" }} display={"flex"} justifyContent={"center"} alignItems="center" minHeight="100vh">
      <RobotApp robotGrid={robotGrid} />
    </Box>
  );
}

export default App;
