import {
  Button,
  Input,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

export const COLORS = {
  player1: "#3879fc",
  player2: "#f5009b",
};

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.determinate}`]: {
    "&.MuiLinearProgress-root::before": {
      opacity: 0,
    },
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    color: "inherit",
  },
}));

export const InputStyled = styled(Input)({
  width: "50%",
  backgroundColor: "#464649",
  borderRadius: "4px 0  0 4px",
  height: "30px",
  "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
});

export const ButtonStyled = styled(Button)({
  borderRadius: "0 4px 4px 0",
  fontSize: "12px",
});

export const Stats = styled(Typography)(
  ({ player2 }: { player2?: boolean }) => {
    const side = player2 ? { marginRight: 0, marginLeft: "auto" } : {};
    return {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      fontSize: "12px",
      justifyItems: "center",
      "& span": {
        display: "flex",
        alignItems: "center",
        ...side,
        "& h6": {
          margin: "0 5px",
          fontSize: "12px",
          color: "white",
        },
        "& svg": {
          width: 16,
          height: 16,
        },
      },
    };
  }
);
