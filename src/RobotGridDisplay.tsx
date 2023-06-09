import { RobotGrid, Coordinates, Direction } from "./types";
import { Box } from "@mui/material";
import { RobotGridCell } from "./RobotGridCell";

type Props = {
  robotGrid: RobotGrid;
  onPlace: (coordinate: Coordinates, direction: Direction) => void;
};

export const RobotGridDisplay = ({ robotGrid, onPlace }: Props) => {
  return (
    <>
      {robotGrid.grid.map((row, index) => {
        return (
          <Box key={`row-${index}`} display={"flex"}>
            {row.map(({ x, y }) => {
              return <RobotGridCell key={`cell-${x}${y}`} coordinates={{ x, y }} onPlace={onPlace} />;
            })}
          </Box>
        );
      })}
    </>
  );
};
