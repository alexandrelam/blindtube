import { YoutubePlaylist, PlaylistItem } from "../types/playlist";
import { playlistDto } from "../dto/playlist";
import { setValue } from ".";

export async function fetchPlaylist(
  playlistID: string
): Promise<PlaylistItem[]> {
  if (!playlistID) return [];
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${playlistID}&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data: YoutubePlaylist = await res.json();
  if (!data.items) return [];
  return playlistDto(data);
}

export function addPlaylistToLobby(
  lobbyId: string,
  playerName: string,
  playlist: PlaylistItem[]
) {
  if (playlist.length)
    setValue(`lobby/${lobbyId}/players/${playerName}`, {
      playlist,
    });
}
