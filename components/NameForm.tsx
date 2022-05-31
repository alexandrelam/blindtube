import React, { Dispatch, SetStateAction, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Snackbar, Alert } from "@mui/material";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
  const [snackbarState, setSnackbarState] = useState<{
    open: boolean;
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  }>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  function handleSnackbarClose() {
    setSnackbarState({
      ...snackbarState,
      open: false,
    });
  }

  function handleSubmitName() {
    if (!playerName) {
      setSnackbarState({
        ...snackbarState,
        open: true,
      });
      return;
    }
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
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: snackbarState.vertical,
          horizontal: snackbarState.horizontal,
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Vous devez rentrer un nom valide!
        </Alert>
      </Snackbar>
    </>
  );
}
