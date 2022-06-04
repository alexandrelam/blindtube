import { Player } from "../types/player";
import { PlaylistItem } from "../types/playlist";

type PlayerDB = {
  playlist: PlaylistItem[];
};

export function listPlayersDto(players: PlayerDB[]): Player[] {
  const entries = Object.entries(players);
  return entries.map(([playerName, playerVariables]) => ({
    playerName,
    playlist: playerVariables.playlist,
  }));
}
