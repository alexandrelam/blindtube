import React, { Dispatch, SetStateAction } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Title = styled("h1")({
  fontSize: "2.5rem",
  fontWeight: "bold",
  margin: "1rem 0",
  color: "white",
  letterSpacing: "0.5rem",
});

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "3rem",
});

const Wrapper = styled("div")({
  display: "flex",
  gap: "1rem",
});

type Props = {
  playerName: string;
  setPlayerName: Dispatch<SetStateAction<string>>;
  submit: () => void;
};

export function LoginForm({
  playerName: value,
  setPlayerName: setValue,
  submit,
}: Props) {
  return (
    <Container>
      <Title>🎵 BLINDTUBE</Title>
      <Wrapper>
        <TextField
          id="outlined-basic"
          label="Pseudo cool :)"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={submit}
          endIcon={<ArrowForwardIcon />}
        >
          Démarrer
        </Button>
      </Wrapper>
    </Container>
  );
}
