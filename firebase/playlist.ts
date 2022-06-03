import { YoutubePlaylist, PlaylistItem } from "../types/playlist";

export async function fetchPlaylist(
  playlistID: string
): Promise<PlaylistItem[]> {
  if (!playlistID) return [];
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${playlistID}&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data: YoutubePlaylist = await res.json();
  console.log(data);
  if (!data.items) return [];
  return data.items.reduce((acc: PlaylistItem[], item) => {
    const playlistItem: PlaylistItem = {
      title: item.snippet.title,
      videoId: item.snippet.resourceId.videoId,
    };

    if (item.snippet.title !== "Private video") return [...acc, playlistItem];
    return acc;
  }, []);
}
