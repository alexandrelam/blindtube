type YoutubePlaylistItem = {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    position: number;
    publishedAt: string;
    resourceId: {
      kind: string;
      videoId: string;
    };
    title: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
    };
    videoOwnerChannelId: string;
    videoOwnerChannelTitle: string;
  };
};

export type YoutubePlaylist = {
  etag: string;
  items: YoutubePlaylistItem[];
  kind: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};

export type PlaylistItem = {
  title: string;
  videoId: string;
};
