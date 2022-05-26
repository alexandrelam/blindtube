import { isLobbyExist } from "../lobby";

export async function lobbyIdGenerator(): Promise<string> {
  const newId = (Math.floor(Math.random() * 90000) + 10000).toString();
  if (await isLobbyExist(newId)) {
    return lobbyIdGenerator();
  }
  return newId;
}
