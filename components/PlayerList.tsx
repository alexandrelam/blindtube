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

type Props = {
  players: any[];
};

export function PlayerList({ players }: Props) {
  return (
    <div>
      <Title>Joueurs: 3</Title>
      <Wrapper>
        {players.map((player) => (
          <PlayerCard
            key={player[0]}
            playerName={player[0]}
            playlistURL={player[1].playlistURL}
          />
        ))}
      </Wrapper>
    </div>
  );
}
