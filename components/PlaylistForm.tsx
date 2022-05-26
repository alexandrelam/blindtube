import React from "react";
import { styled } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { getPlaylist } from "../firebase/localstorage/playlist";

const Title = styled("h2")({
  fontSize: "2.5rem",
  fontWeight: "bold",
  margin: "1rem 0",
  color: "white",
});

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2.5rem",
});

const Wrapper = styled("div")({
  display: "flex",
  gap: "1rem",
});

type Props = {
  handleCreateGame: (playerlistURL: string) => void;
};

export function PlaylistForm({ handleCreateGame }: Props) {
  const [url, setUrl] = React.useState(getPlaylist());

  return (
    <Container>
      <Title>Ajouter une playlist youtube</Title>
      <Wrapper>
        <TextField
          id="outlined-basic"
          label="URL"
          variant="outlined"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleCreateGame(url)}>
          Ajouter
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleCreateGame("")}
        >
          Skip
        </Button>
      </Wrapper>
    </Container>
  );
}
