import type { NextPage } from "next";
import { styled } from "@mui/system";
import { LoginForm } from "../components/LoginForm";
import { useState } from "react";
import { createLobby } from "../firebase/lobby";
import { useRouter } from "next/router";
import { setPlayerName as localStorageSetPlayerName } from "../firebase/localstorage/playerName";

const Container = styled("div")({
  display: "flex",
  gap: "1rem",
});

const Home: NextPage = () => {
  const router = useRouter();

  const [playerName, setPlayerName] = useState("");

  async function createGame() {
    try {
      const lobbyId = await createLobby(playerName);
      localStorageSetPlayerName(playerName);
      router.push(`/${lobbyId}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <LoginForm
        playerName={playerName}
        setPlayerName={setPlayerName}
        submit={createGame}
      />
    </Container>
  );
};

export default Home;
