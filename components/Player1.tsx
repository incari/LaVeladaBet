import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  BorderLinearProgress,
  ButtonStyled,
  COLORS,
  InputStyled,
  Stats,
} from "./BetCard.styles";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import PaidIcon from "@mui/icons-material/Paid";

export const Player1 = ({ percentage = 60 }) => {
  return (
    <Box
      sx={{
        width: "50%",
        color: COLORS.player1,
        textAlign: "right",
        marginRight: "5px",
      }}
    >
      <Typography variant="h6">Player 1</Typography>
      <Box
        sx={{
          textAlign: "right",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stats variant="subtitle1">
          <span>
            <PaidIcon />
            <Typography variant="subtitle2">110 €</Typography>
          </span>
          <span>
            <EmojiEventsIcon />
            <Typography variant="subtitle2">1 : 2</Typography>
          </span>
          <span>
            <GroupIcon />
            <Typography variant="subtitle2">45</Typography>
          </span>
        </Stats>

        <span>
          <Typography variant="h4" fontWeight="bold">
            {percentage}%
          </Typography>
          <BorderLinearProgress
            sx={{
              transform: "rotate(180deg)",
              height: 10,
            }}
            variant="determinate"
            color="inherit"
            value={percentage}
          />
        </span>
      </Box>
      <form style={{ display: "flex", marginTop: "10px" }}>
        <InputStyled type="number" />
        <ButtonStyled
          size="small"
          variant="contained"
          sx={{ backgroundColor: COLORS.player1 }}
        >
          Apostar
        </ButtonStyled>
      </form>
    </Box>
  );
};
