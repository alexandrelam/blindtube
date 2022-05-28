export function setPlaylist(playlistURL: string) {
  return localStorage.setItem("playlist", playlistURL);
}

export function getPlaylist() {
  return localStorage.getItem("playlist")
    ? (localStorage.getItem("playlist") as string)
    : "";
}
