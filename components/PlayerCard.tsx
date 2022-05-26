import React from "react";
import { styled } from "@mui/system";

const Card = styled("div")({
  display: "flex",
  width: "20rem",
  flexDirection: "column",
  padding: "1rem",
  gap: "0.5rem",
  border: "1px solid #4F3065",
  borderRadius: "8px",
  backgroundColor: "#4F3065",
  color: "white",
});

const Title = styled("h3")({
  fontWeight: "bold",
  margin: 0,
  color: "white",
});

const Playlist = styled("span")({
  color: "white",
});

export function PlayerCard() {
  return (
    <Card>
      <Title>Cool pseudo</Title>
      <Playlist>Playlist: Cool playlist</Playlist>
    </Card>
  );
}
