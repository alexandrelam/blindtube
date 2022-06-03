import React from "react";
import { styled } from "@mui/system";
import { Button, TextField } from "@mui/material";

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
  submit: (playlistID: string) => Promise<void>;
  playlistURL: string;
  setPlaylistURL: (playerlistURL: string) => void;
};

function parseYoutubePlaylistUrl(url: string): string {
  const params = new URLSearchParams(`?${url.split("?")[1]}`);
  const list = params.get("list");
  console.log(params.keys());
  if (list) {
    console.log(list);
    return list;
  } else {
    throw new Error(`Invalid Youtube URL: ${url}`);
  }
}

export function PlaylistForm({ playlistURL, setPlaylistURL, submit }: Props) {
  function handleValidatePlaylistURL() {
    const parsedPlaylistURL = parseYoutubePlaylistUrl(playlistURL);
    if (parsedPlaylistURL) {
      submit(parsedPlaylistURL);
    }
  }
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
        <Button variant="contained" onClick={handleValidatePlaylistURL}>
          Ajouter
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setPlaylistURL("");
            submit("");
          }}
        >
          Skip
        </Button>
      </Wrapper>
    </Container>
  );
}
