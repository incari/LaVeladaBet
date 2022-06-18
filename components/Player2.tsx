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

export const Player2 = ({ percentage = 40 }) => {
  return (
    <Box
      sx={{
        width: "50%",
        color: COLORS.player2,
        textAlign: "left",
        marginLeft: "5px",
      }}
    >
      <Typography variant="h6">Player 2</Typography>
      <Box
        sx={{
          textAlign: "right",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>
          <Typography variant="h4" fontWeight="bold">
            {percentage}%
          </Typography>
          <BorderLinearProgress
            sx={{
              height: 10,
            }}
            variant="determinate"
            color="inherit"
            value={percentage}
          />
        </span>
        <Stats variant="subtitle1" player2>
          <span>
            <Typography variant="subtitle2">110 €</Typography>
            <PaidIcon />
          </span>
          <span>
            <Typography variant="subtitle2">1 : 2</Typography>
            <EmojiEventsIcon />
          </span>
          <span>
            <Typography variant="subtitle2">45</Typography>
            <GroupIcon />
          </span>
        </Stats>
      </Box>
      <form style={{ display: "flex", marginTop: "10px" }}>
        <InputStyled type="number" />
        <ButtonStyled
          size="small"
          variant="contained"
          sx={{ backgroundColor: COLORS.player2 }}
        >
          Apostar
        </ButtonStyled>
      </form>
    </Box>
  );
};
