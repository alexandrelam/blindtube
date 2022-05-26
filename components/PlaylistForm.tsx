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
  submit: () => void;
  playlistURL: string;
  setPlaylistURL: (playerlistURL: string) => void;
};

export function PlaylistForm({ playlistURL, setPlaylistURL, submit }: Props) {
  return (
    <Container>
      <Title>Ajouter une playlist youtube</Title>
      <Wrapper>
        <TextField
          id="outlined-basic"
          label="URL"
          variant="outlined"
          value={playlistURL}
          onChange={(e) => setPlaylistURL(e.target.value)}
        />
        <Button variant="contained" onClick={submit}>
          Ajouter
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setPlaylistURL("");
            submit();
          }}
        >
          Skip
        </Button>
      </Wrapper>
    </Container>
  );
}
