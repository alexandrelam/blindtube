type LobbyGameStatus = "waiting" | "playing" | "finished";

export type LobbySettings = {
  numberOfRounds: number;
  status: LobbyGameStatus;
};
