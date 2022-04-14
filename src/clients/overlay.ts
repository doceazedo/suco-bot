import fetch from 'cross-fetch';

export type CurrentlyPlayingDetailsResponse = {
  song: {
    title: string;
    cover: string;
    id: string;
  };
  artist: {
    name: string;
    image: string;
  };
};

const baseUrl = 'http://localhost:2727/api';

export const getCurrentlyPlayingDetails = async () => {
  const resp = await fetch(`${baseUrl}/song?details`);
  const data: CurrentlyPlayingDetailsResponse = await resp.json();
  return data;
};
