import { database, setValue } from ".";
import { get, child, ref } from "firebase/database";
import { lobbyIdGenerator } from "./utils/lobbyIdGenerator";
import { LobbySettings } from "../types/lobby";
import { PlayerCreated } from "../types/player";

export async function createLobby(
  playerName: string,
  numberOfRounds: number,
  playlistURL: string
) {
  const lobbyId = await lobbyIdGenerator();

  const lobby: LobbySettings = {
    numberOfRounds,
    status: "waiting",
  };
  await setValue(`lobby/${lobbyId}`, lobby);

  const player: PlayerCreated = {
    playlistURL,
  };
  await setValue(`lobby/${lobbyId}/players/${playerName}`, player);

  return lobbyId;
}

export async function isLobbyExist(lobbyId: string) {
  return get(child(ref(database), `lobby/${lobbyId}`)).then((snapshot) =>
    snapshot.exists()
  );
}

export async function updateNumberOfRound(
  lobbyId: number,
  numberOfRounds: number
) {
  await setValue(`lobby/${lobbyId}/numberOfRounds`, numberOfRounds);
}
