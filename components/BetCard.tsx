import React from "react";
import { Card, Typography, Box, Divider } from "@mui/material";
import { Player1 } from "./Player1";
import { Player2 } from "./Player2";

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

export function BetCard() {
  return (
    <Card
      sx={{
        minHeight: 200,
        maxWidth: 340,
        backgroundColor: "#181818",
        display: "column",
        textAlign: "center",
        padding: "10px",
        margin: "auto",
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
  );
}
