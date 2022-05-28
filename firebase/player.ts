import { getOnceValue, setValue } from ".";

export function getLobbyPlayers(lobbyId: string) {
  return getOnceValue(`lobby/${lobbyId}/players`);
}

export async function isPlayerInLobby(lobbyId: string, playerName: string) {
  return !!(await getOnceValue(`lobby/${lobbyId}/players/${playerName}`));
}

export function addPlayerToLobby(
  lobbyId: string,
  playerName: string,
  playlistURL: string
): Promise<void> {
  return setValue(`lobby/${lobbyId}/players/${playerName}`, {
    playlistURL,
  });
}

export function removePlayerFromLobby(
  lobbyId: string,
  playerName: string
): Promise<void> {
  return setValue(`lobby/${lobbyId}/players/${playerName}`, null);
}
