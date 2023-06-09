import { Button } from "@mui/material";
import {
  ArrowCircleDownTwoTone,
  ArrowCircleUpTwoTone,
  ArrowCircleLeftTwoTone,
  ArrowCircleRightTwoTone,
} from "@mui/icons-material";
import { Direction } from "./types";
import { styled } from "@mui/material/styles";

const DIRECTIONS: Record<Direction, Direction> = {
  NORTH: "NORTH",
  SOUTH: "SOUTH",
  EAST: "EAST",
  WEST: "WEST",
};

type Props = {
  onDirectionSelect: (direction: Direction) => void;
};

const StyledButton = styled(Button)(() => ({
  height: "50%",
  width: "50%",
  minWidth: "50%",
}));

export const RobotDirectionButtons = ({ onDirectionSelect }: Props) => {
  const directionButtons: { direction: Direction; icon: React.ReactElement }[] = [
    {
      direction: DIRECTIONS.NORTH,
      icon: <ArrowCircleUpTwoTone />,
    },
    {
      direction: DIRECTIONS.EAST,
      icon: <ArrowCircleRightTwoTone />,
    },
    {
      direction: DIRECTIONS.SOUTH,
      icon: <ArrowCircleDownTwoTone />,
    },
    {
      direction: DIRECTIONS.WEST,
      icon: <ArrowCircleLeftTwoTone />,
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {directionButtons.map(({ direction, icon }) => {
        return (
          <StyledButton
            key={direction}
            onClick={(e) => {
              e.stopPropagation();
              onDirectionSelect(direction);
            }}
          >
            {icon}
          </StyledButton>
        );
      })}
    </div>
  );
};
