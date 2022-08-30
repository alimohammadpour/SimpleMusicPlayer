import axios from "axios";

const API_KEY = "b096def37adbdf20a7fc7d1f12499b5c";
const BASE_URL = `https://ws.audioscrobbler.com/2.0/?method=track.search&api_key=${API_KEY}&format=json`;

export const FETCH_TRACK = "FETCH_TRACK";

export function fetchTrack(search) {
  const url = `${BASE_URL}&track=${search}`;

  let payload = axios.get(url);

  return {
    type: FETCH_TRACK,
    payload
  };
}
