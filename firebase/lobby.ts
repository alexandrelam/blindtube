import { database } from "./ index";
import { set, ref } from "firebase/database";
import { lobbyIdGenerator } from "./utils/lobbyIdGenerator";

export function createLobby(leaderName: string) {
  const lobbyId = lobbyIdGenerator();
  return set(ref(database, `lobby/${lobbyId}`), {
    leader: leaderName,
    players: [leaderName],
  });
}
