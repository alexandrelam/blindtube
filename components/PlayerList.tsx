import React from "react";
import { styled } from "@mui/system";
import { PlayerCard } from "./PlayerCard";
import { Player } from "../types/player";

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

type Props = {
  players: Player[];
};

export function PlayerList({ players }: Props) {
  return (
    <div>
      <Title>Joueurs: {players.length}</Title>
      <Wrapper>
        {players.map((player) => (
          <PlayerCard
            key={player.playerName}
            playerName={player.playerName}
            playlistURL={player.playlistUrl}
          />
        ))}
      </Wrapper>
    </div>
  );
}
