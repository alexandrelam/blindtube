import React, { Dispatch, SetStateAction } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Header } from "./Header";
import { NameForm } from "./NameForm";
import { PlaylistForm } from "./PlaylistForm";

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "3rem",
});

type Props = {
  playerName: string;
  setPlayerName: Dispatch<SetStateAction<string>>;
  playlistURL: string;
  setPlaylistURL: Dispatch<SetStateAction<string>>;
  submit: () => void;
  isJoining?: boolean;
};

export function LoginForm({
  playerName,
  setPlayerName,
  playlistURL,
  setPlaylistURL,
  submit,
  isJoining,
}: Props) {
  const [step, setStep] = React.useState(0);

  return (
    <Container>
      {step === 0 && (
        <NameForm
          playerName={playerName}
          setPlayerName={setPlayerName}
          setStep={setStep}
          isJoining={isJoining}
        />
      )}
      {step === 1 && (
        <>
          <Header playerName={playerName} />
          <PlaylistForm
            playlistURL={playlistURL}
            setPlaylistURL={setPlaylistURL}
            submit={submit}
          />
        </>
      )}
    </Container>
  );
}
