import { database, setValue } from ".";
import { get, child, ref } from "firebase/database";
import { lobbyIdGenerator } from "./utils/lobbyIdGenerator";

export async function createLobby(playerName: string) {
  const lobbyId = lobbyIdGenerator();
  await setValue(`lobby/${lobbyId}/players`, {
    [playerName]: {
      playlist: "",
    },
  });

  return lobbyId;
}

export async function isLobbyExist(lobbyId: string) {
  return get(child(ref(database), `lobby/${lobbyId}`)).then((snapshot) =>
    snapshot.exists()
  );
}
