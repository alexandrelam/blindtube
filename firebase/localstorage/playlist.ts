export function setPlaylist(playlistURL: string, playlistID: string) {
  return localStorage.setItem(
    "playlist",
    JSON.stringify({ playlistURL, playlistID })
  );
}

export function getPlaylist(): {
  playlistURL: string;
  playlistID: string;
} | null {
  const playlistStr = localStorage.getItem("playlist");
  if (!playlistStr) return null;
  return JSON.parse(playlistStr);
}
