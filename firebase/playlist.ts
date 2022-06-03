import { YoutubePlaylist, PlaylistItem } from "../types/playlist";

export async function fetchPlaylist(): Promise<PlaylistItem[]> {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLjRBIF0WaocSOcUzIMuVmAAo3GhqOeAnu&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data: YoutubePlaylist = await res.json();
  return data.items.reduce((acc: PlaylistItem[], item) => {
    const playlistItem: PlaylistItem = {
      title: item.snippet.title,
      videoId: item.snippet.resourceId.videoId,
    };

    if (item.snippet.title !== "Private video") return [...acc, playlistItem];
    return acc;
  }, []);
}
