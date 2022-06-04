import { PlaylistItem, YoutubePlaylist } from "../types/playlist";

export function playlistDto(playlist: YoutubePlaylist): PlaylistItem[] {
  return playlist.items.reduce((acc: PlaylistItem[], item) => {
    const playlistItem: PlaylistItem = {
      title: item.snippet.title,
      videoId: item.snippet.resourceId.videoId,
    };

    if (item.snippet.title !== "Private video") return [...acc, playlistItem];
    return acc;
  }, []);
}
