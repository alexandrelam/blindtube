import { getOnceValue, setValue } from ".";

export function getLobbyPlayers(lobbyId: string) {
  return getOnceValue(`lobby/${lobbyId}/players`);
}

export function isPlayerInLobby(lobbyId: string, playerName: string) {
  return getOnceValue(`lobby/${lobbyId}/players/${playerName}`);
}

export function addPlayerToLobby(lobbyId: string, playerName: string) {
  return setValue(`lobby/${lobbyId}/players/${playerName}`, {
    playlist: "",
  });
}
