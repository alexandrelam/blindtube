import type { NextPage } from "next";
import { styled } from "@mui/system";
import { LoginForm } from "../components/LoginForm";
import { useState } from "react";
import { createLobby } from "../firebase/lobby";

const Container = styled("div")({
  margin: "1rem",
  display: "flex",
  gap: "1rem",
});

const Home: NextPage = () => {
  const [playerName, setPlayerName] = useState("");

  async function createGame() {
    try {
      await createLobby(playerName);
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
