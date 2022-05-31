export function setPlayerName(name: string) {
  if (!name) return;
  return localStorage.setItem("player-name", name);
}

export function getPlayerName() {
  return localStorage.getItem("player-name")
    ? (localStorage.getItem("player-name") as string)
    : "";
}

export function removePlayerName() {
  return localStorage.removeItem("player-name");
}
