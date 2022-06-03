import React, { Dispatch, SetStateAction } from "react";
import { styled } from "@mui/system";
import { Header } from "./Header";
import { NameForm } from "./NameForm";
import { PlaylistForm } from "./PlaylistForm";

const NameFormContainer = styled("div")({
  display: "flex",
  height: "80%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",
});

const PlaylistStepContainer = styled("div")({
  display: "flex",
  height: "80%",
  flexDirection: "column",
});

const PlaylistFormContainer = styled("div")({
  display: "flex",
  height: "80%",
  justifyContent: "center",
  alignItems: "center",
  gap: "3rem",
});

type Props = {
  playerName: string;
  setPlayerName: Dispatch<SetStateAction<string>>;
  playlistURL: string;
  setPlaylistURL: Dispatch<SetStateAction<string>>;
  submit: (playlistID: string) => Promise<void>;
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
    <>
      {step === 0 && (
        <NameFormContainer>
          <NameForm
            playerName={playerName}
            setPlayerName={setPlayerName}
            setStep={setStep}
            isJoining={isJoining}
          />
        </NameFormContainer>
      )}
      {step === 1 && (
        <PlaylistStepContainer>
          <Header playerName={playerName} />
          <PlaylistFormContainer>
            <PlaylistForm
              playlistURL={playlistURL}
              setPlaylistURL={setPlaylistURL}
              submit={submit}
            />
          </PlaylistFormContainer>
        </PlaylistStepContainer>
      )}
    </>
  );
}
