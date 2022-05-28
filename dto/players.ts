import { Player } from "../types/player";

type PlayerDB = {
  playlistURL: string;
};

export function listPlayersDto(players: PlayerDB[]): Player[] {
  const entries = Object.entries(players);
  return entries.map(([playerName, playerVariables]) => ({
    playerName,
    playlistURL: playerVariables.playlistURL,
  }));
}
