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
  handleCreateGame: () => void;
};

export function PlaylistForm({ handleCreateGame }: Props) {
  const [url, setUrl] = React.useState("");

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
        <Button variant="contained" onClick={handleCreateGame}>
          Ajouter
        </Button>
        <Button variant="outlined" color="secondary">
          Skip
        </Button>
      </Wrapper>
    </Container>
  );
}
