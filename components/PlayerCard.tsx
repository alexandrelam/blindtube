import React from "react";
import { styled } from "@mui/system";
import { PlaylistItem } from "../types/playlist";

const Card = styled("div")({
  display: "flex",
  width: "20rem",
  padding: "1rem",
  gap: "0.8rem",
  border: "1px solid #4F3065",
  borderRadius: "8px",
  backgroundColor: "#4F3065",
  color: "white",
  alignItems: "center",
});

const Link = styled("a")({
  color: "#93c5fd",
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
});

const Title = styled("h3")({
  fontWeight: "bold",
  margin: 0,
  color: "white",
});

const Playlist = styled("span")({
  color: "white",
});

type Props = {
  playerName: string;
  playlist: PlaylistItem[] | boolean;
};

export function PlayerCard({ playerName, playlist }: Props) {
  return (
    <Card>
      <Title>{playerName}</Title>
      {playlist && <Link>playlist</Link>}
    </Card>
  );
}
