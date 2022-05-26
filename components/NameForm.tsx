import React, { Dispatch, SetStateAction } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Header } from "./Header";
import { PlaylistForm } from "./PlaylistForm";
import { setPlayerName as localStorageSetPlayerName } from "../firebase/localstorage/playerName";

const Title = styled("h1")({
  fontSize: "2.5rem",
  fontWeight: "bold",
  margin: "1rem 0",
  color: "white",
  letterSpacing: "0.5rem",
});

const Wrapper = styled("div")({
  display: "flex",
  gap: "1rem",
});

type Props = {
  playerName: string;
  setPlayerName: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
  isJoining?: boolean;
};

export function NameForm({
  playerName,
  setPlayerName,
  setStep,
  isJoining,
}: Props) {
  function handleSubmitName() {
    localStorageSetPlayerName(playerName);
    setStep(1);
  }

  return (
    <>
      <Title>🎵 BLINDTUBE</Title>
      <Wrapper>
        <TextField
          id="outlined-basic"
          label="Pseudo cool :)"
          variant="outlined"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleSubmitName}
          endIcon={<ArrowForwardIcon />}
        >
          {isJoining ? "Rejoindre" : "Démarrer"}
        </Button>
      </Wrapper>
    </>
  );
}
