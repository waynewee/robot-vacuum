import { styled } from "@mui/material/styles";
import { Coordinates, RobotGrid, Direction } from "./types";
import { Box, ClickAwayListener, Paper } from "@mui/material";
import { useState } from "react";
import { RobotDirectionButtons } from "./RobotDirectionButtons";

const ResponsivePaper = styled(Paper)(({ theme }) => {
  const robotGrid = new RobotGrid(0, 0);
  return {
    [theme.breakpoints.down("sm")]: {
      height: robotGrid.CELL_WIDTH_XS,
      width: robotGrid.CELL_WIDTH_XS,
    },
    [theme.breakpoints.up("sm")]: {
      height: robotGrid.CELL_WIDTH_MD,
      width: robotGrid.CELL_WIDTH_MD,
    },
    [theme.breakpoints.up("md")]: {
      height: robotGrid.CELL_WIDTH_LG,
      width: robotGrid.CELL_WIDTH_LG,
    },
  };
});

type Props = {
  coordinates: Coordinates;
  onPlace: (coordinate: Coordinates, direction: Direction) => void;
};

export const RobotGridCell = ({ coordinates: { x, y }, onPlace }: Props) => {
  const [showDirectionButtons, setShowDirectionButtons] = useState<boolean>(false);
  const [nextCoordinates, setNextCoordinates] = useState<Coordinates | null>();

  const handlePlace = (coordinates: Coordinates) => {
    setShowDirectionButtons(true);
    setNextCoordinates(coordinates);
  };

  const handleDirectionSelect = (direction: Direction) => {
    setShowDirectionButtons(false);
    if (nextCoordinates) {
      onPlace(nextCoordinates, direction);
      setNextCoordinates(null);
    }
  };

  return (
    <ResponsivePaper
      data-testid={`cell-${x}${y}`}
      sx={{ backgroundColor: "#ebebeb" }}
      key={`${x}${y}`}
      onClick={() => handlePlace({ x, y })}
      square
    >
      <ClickAwayListener onClickAway={() => setShowDirectionButtons(false)}>
        <Box
          sx={{ opacity: showDirectionButtons ? 1 : 0, transition: "0.2s ease" }}
          display="flex"
          alignItems="center"
          justifyContent={"center"}
          height={"100%"}
        >
          {nextCoordinates?.x === x && nextCoordinates.y === y && (
            <RobotDirectionButtons onDirectionSelect={handleDirectionSelect} />
          )}
        </Box>
      </ClickAwayListener>
    </ResponsivePaper>
  );
};
