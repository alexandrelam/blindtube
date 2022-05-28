import type { NextPage } from "next";
import { LoginForm } from "../components/LoginForm";
import { useEffect, useState } from "react";
import { createLobby } from "../firebase/lobby";
import { useRouter } from "next/router";
import { setPlaylist as localStorageSetPlayList } from "../firebase/localstorage/playlist";
import { getPlaylist } from "../firebase/localstorage/playlist";

const Home: NextPage = () => {
  const router = useRouter();
  const [playerName, setPlayerName] = useState("");
  const [playlistURL, setPlaylistURL] = useState("");

  useEffect(() => {
    if (getPlaylist()) setPlaylistURL(getPlaylist());
  }, []);

  async function createGame() {
    try {
      if (playlistURL) {
        localStorageSetPlayList(playlistURL);
      }
      const lobbyId = await createLobby(playerName, 3, playlistURL);
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
