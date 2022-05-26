import type { NextPage } from "next";
import { styled } from "@mui/system";
import { LoginForm } from "../components/LoginForm";
import { useState } from "react";
import { createLobby } from "../firebase/lobby";
import { useRouter } from "next/router";
import { addPlayList as localStorageAddPlayList } from "../firebase/localstorage/playlist";

const Home: NextPage = () => {
  const router = useRouter();
  const [playerName, setPlayerName] = useState("");
  const [playlistURL, setPlaylistURL] = useState("");

  async function createGame() {
    try {
      if (playlistURL) {
        localStorageAddPlayList(playlistURL);
      }
      const lobbyId = await createLobby(playerName, playlistURL);
      router.push(`/${lobbyId}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <LoginForm
      playerName={playerName}
      setPlayerName={setPlayerName}
      playlistURL={playlistURL}
      setPlaylistURL={setPlaylistURL}
      submit={createGame}
    />
  );
};

export default Home;
