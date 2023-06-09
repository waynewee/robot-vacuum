import { Box, useMediaQuery } from "@mui/material";
import { Robot, RobotGrid } from "./types";

type Props = {
  robotState: Robot["state"];
  robotGrid: RobotGrid;
};

export const RobotAvatar = ({ robotState, robotGrid }: Props) => {
  const displayXs = useMediaQuery("(max-width:600px)");
  const displayMd = useMediaQuery("(min-width: 600px) and (max-width:900px)");

  if (!robotState.placed) {
    return null;
  }

  const ROBOT_STYLE = {
    LG: {
      distance: robotGrid.CELL_WIDTH_LG,
      size: 40,
    },
    MD: {
      distance: robotGrid.CELL_WIDTH_MD,
      size: 32,
    },
    SM: {
      distance: robotGrid.CELL_WIDTH_XS,
      size: 24,
    },
  };

  let robotStyle = ROBOT_STYLE.LG;

  if (displayMd) {
    robotStyle = ROBOT_STYLE.MD;
  }

  if (displayXs) {
    robotStyle = ROBOT_STYLE.SM;
  }

  const { distance, size } = robotStyle;

  const translateX = robotState.coordinates.x * distance;
  const translateY = (robotGrid.height - 1 - robotState.coordinates.y) * distance;

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      height={distance}
      width={distance}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      data-testid="robot-avatar"
      sx={{ transform: `translate(${translateX}px, ${translateY}px)`, transition: "0.6s ease-out" }}
    >
      <img
        style={{
          transform: `rotate(${robotState.rotation}deg)`,
          transition: "0.5s ease",
          height: size,
          width: size,
        }}
        src={"robot-vacuum-cleaner.png"}
      />
    </Box>
  );
};
