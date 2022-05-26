import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isLobbyExist as isLobbyExistPromise } from "../firebase/lobby";
import { getValue } from "../firebase";
import {
  getPlayerName,
  setPlayerName as setLocalStoragePlayerName,
} from "../firebase/localstorage/playerName";
import { LoginForm } from "../components/LoginForm";
import { addPlayerToLobby, isPlayerInLobby } from "../firebase/player";

async function lobbyDoesntExistRedirect(
  lobbyId: string,
  router: ReturnType<typeof useRouter>
) {
  const isLobbyExist = await isLobbyExistPromise(lobbyId);
  if (!isLobbyExist) await router.push("/");
}

export default function Lobby() {
  const router = useRouter();
  const [playerName, setPlayerName] = useState<string>("");
  const [hasPlayerSetName, setHasPlayerSetName] = useState<boolean>(false);
  const [lobbyPlayers, setLobbyPlayers] = useState<string[]>([]);
  const { lobbyId } = router.query;

  useEffect(() => {
    if (lobbyId) {
      (async () => {
        await lobbyDoesntExistRedirect(lobbyId as string, router);

        // if player has set a name in localstorage then use it
        if (getPlayerName()) {
          setPlayerName(getPlayerName());
          setHasPlayerSetName(true);
        }

        getValue(`lobby/${lobbyId}/players`, setLobbyPlayers);
      })();
    }
  }, [lobbyId, router]);

  useEffect(() => {
    if (lobbyId && hasPlayerSetName) {
      // check if player is in lobby
      // if not add him to lobby
      (async () => {
        if (!(await isPlayerInLobby(lobbyId as string, playerName)))
          await addPlayerToLobby(lobbyId as string, playerName);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lobbyId, hasPlayerSetName]);

  function handleSubmitName() {
    setPlayerName(playerName);
    setLocalStoragePlayerName(playerName);
    setHasPlayerSetName(true);
  }

  return (
    <>
      <h2>Lobby ID: {lobbyId}</h2>
      <h3>Players:</h3>

      {lobbyPlayers.map((player, index) => (
        <p key={index}>{player[0]}</p>
      ))}

      {!hasPlayerSetName && (
        <LoginForm
          playerName={playerName}
          setPlayerName={setPlayerName}
          submit={handleSubmitName}
        />
      )}
    </>
  );
}
