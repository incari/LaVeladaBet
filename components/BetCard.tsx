import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import PaidIcon from "@mui/icons-material/Paid";
import {
  Card,
  Typography,
  Box,
  LinearProgress,
  linearProgressClasses,
  Divider,
  Button,
  Input,
} from "@mui/material";
import { styled } from "@mui/system";

const Title = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#26262c",
        color: "#FFFFFF",
        padding: "10px 20px",
        borderRadius: "8px",
        textAlign: "center",
        height: "fit-content",
      }}
    >
      <Typography variant="h6">¿Quién ganará la pelea?</Typography>
      <Typography variant="subtitle1" fontWeight="300">
        La participación finaliza en 3:50
      </Typography>
    </Box>
  );
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
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

const Stats = styled(Typography)(({ player2 }: { player2?: boolean }) => {
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
});

const Player1 = ({ percentage = 60 }) => {
  return (
    <Box
      sx={{
        width: "50%",
        color: "#1F69FF",
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
        <Input
          style={{
            width: "50%",
            backgroundColor: "gray",
            borderRadius: "8px 0  0 8px",
          }}
          type="number"
        />
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: "#1F69FF" }}
        >
          Apostar
        </Button>
      </form>
    </Box>
  );
};

const Player2 = ({ percentage = 40 }) => {
  return (
    <Box
      sx={{
        width: "50%",
        color: "#E0008E",
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
        <Input
          style={{
            width: "50%",
            backgroundColor: "gray",
            borderRadius: "8px 0  0 8px",
          }}
          type="number"
        />
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: "#E0008E" }}
        >
          Apostar
        </Button>
      </form>
    </Box>
  );
};
export function BetCard() {
  return (
    <Box>
      <Card
        sx={{
          minHeight: 200,
          maxWidth: 340,
          backgroundColor: "#181818",
          display: "column",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <Title />
        <Box sx={{ display: "flex", flex: "1" }}>
          <Player1 />
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ backgroundColor: "gray" }}
          />
          <Player2 />
        </Box>
        <Typography sx={{ color: "#a37fd9", margin: "10px 0" }}></Typography>
      </Card>
    </Box>
  );
}
