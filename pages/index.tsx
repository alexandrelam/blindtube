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
  const [playlistID, setPlaylistID] = useState("");

  useEffect(() => {
    const playlist = getPlaylist();
    if (playlist) {
      setPlaylistURL(playlist.playlistURL);
      setPlaylistID(playlist.playlistID);
    }
  }, []);

  async function createGame(playlistID: string) {
    console.log("playlistID", playlistID);
    try {
      if (playlistURL) {
        localStorageSetPlayList(playlistURL, playlistID);
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
