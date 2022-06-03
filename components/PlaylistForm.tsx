import React from "react";
import { styled } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { Notification } from "./Notification";

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

function parseYoutubePlaylistUrl(url: string): string | null {
  const params = new URLSearchParams(`?${url.split("?")[1]}`);
  const list = params.get("list");
  console.log(params.keys());
  if (!list) return null;
  return list;
}

export function PlaylistForm({ playlistURL, setPlaylistURL, submit }: Props) {
  const [openNotification, setOpenNotification] = React.useState(false);

  function handleValidatePlaylistURL() {
    const parsedPlaylistURL = parseYoutubePlaylistUrl(playlistURL);
    if (parsedPlaylistURL) {
      submit(parsedPlaylistURL);
    } else {
      setOpenNotification(true);
    }
  }
  return (
    <Container>
      <Notification
        label={"Vous devez rentrer une URL valide"}
        open={openNotification}
        setOpen={setOpenNotification}
        type="error"
      />
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
