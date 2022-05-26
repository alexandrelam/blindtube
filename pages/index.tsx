import type { NextPage } from "next";
import { styled } from "@mui/system";
import { LoginForm } from "../components/LoginForm";
import { useState } from "react";
import { createLobby } from "../firebase/lobby";
import { useRouter } from "next/router";
import { setPlayerName as localStorageSetPlayerName } from "../firebase/localstorage/playerName";
import { PlaylistForm } from "../components/PlaylistForm";

const Container = styled("div")({
  display: "flex",
  height: "80%",
  alignItems: "center",
  justifyContent: "center",
});

const Home: NextPage = () => {
  const router = useRouter();

  const [playerName, setPlayerName] = useState("");
  const [step, setStep] = useState(0);

  async function createGame() {
    try {
      const lobbyId = await createLobby(playerName);
      router.push(`/${lobbyId}`);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmitName() {
    localStorageSetPlayerName(playerName);
    setStep(1);
  }

  return (
    <Container>
      {step === 0 && (
        <LoginForm
          playerName={playerName}
          setPlayerName={setPlayerName}
          submit={handleSubmitName}
        />
      )}
      {step === 1 && <PlaylistForm handleCreateGame={createGame} />}
    </Container>
  );
};

export default Home;
