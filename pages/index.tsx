import type { NextPage } from "next";
import { styled } from "@mui/system";
import { LoginForm } from "../components/LoginForm";
import { useState } from "react";
import { createLobby } from "../firebase/lobby";
import { useRouter } from "next/router";
import { setPlayerName as localStorageSetPlayerName } from "../firebase/localstorage/playerName";
import { PlaylistForm } from "../components/PlaylistForm";
import { Header } from "../components/Header";
import { addPlayList } from "../firebase/localstorage/playlist";

const Container = styled("div")({
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
});

const Home: NextPage = () => {
  const router = useRouter();

  const [playerName, setPlayerName] = useState("");
  const [step, setStep] = useState(0);

  async function createGame(playlistURL: string) {
    try {
      if (playlistURL) {
        addPlayList(playlistURL);
      }
      const lobbyId = await createLobby(playerName, playlistURL);
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
      {step === 1 && (
        <>
          <Header playerName={playerName} />
          <PlaylistForm handleCreateGame={createGame} />
        </>
      )}
    </Container>
  );
};

export default Home;
