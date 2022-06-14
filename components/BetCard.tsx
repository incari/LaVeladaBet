import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import PaidIcon from "@mui/icons-material/Paid";
export function BetCard() {
  return (
    <div className="BetCardContainer">
      <div className="BetCardP1">
        <div className="title">Player 1</div>
        <div className="statsP1" style={{ display: "flex" }}>
          <PaidIcon /> 110 €
        </div>
        <div className="statsP1" style={{ display: "flex" }}>
          <EmojiEventsIcon /> 1 : 2
        </div>
        <div className="statsP1" style={{ display: "flex" }}>
          <GroupIcon /> 42
        </div>
      </div>
      <div className="BetCardP2" style={{ alignItems: "flex-end" }}>
        <div className="title">Player 2</div>
        <div className="statsP1" style={{ display: "flex" }}>
          <PaidIcon /> 110 €
        </div>
        <div className="statsP1" style={{ display: "flex" }}>
          <EmojiEventsIcon /> 1 : 2
        </div>
        <div className="statsP1" style={{ display: "flex" }}>
          <GroupIcon /> 42
        </div>
      </div>
    </div>
  );
}
