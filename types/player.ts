import { PlaylistItem } from "./playlist";

export type Player = {
  playerName: string;
  playlist: PlaylistItem[] | boolean;
};

export type PlayerCreated = {
  playlistURL: string;
};
