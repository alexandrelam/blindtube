import React from "react";
import { styled } from "@mui/system";
import { PlayerCard } from "./PlayerCard";

const Title = styled("h2")({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "white",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export function PlayerList() {
  return (
    <div>
      <Title>Joueurs: 3</Title>
      <Wrapper>
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </Wrapper>
    </div>
  );
}
