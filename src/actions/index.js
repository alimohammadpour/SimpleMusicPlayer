import axios from "axios";

const API_KEY = "b096def37adbdf20a7fc7d1f12499b5c";
const BASE_URL = `https://ws.audioscrobbler.com/2.0/?api_key=${API_KEY}&format=json`;

export const FETCH_TRACK = "FETCH_TRACK";
export const SELECTED_TRACK = "SELECTED_TRACK";

export function fetchTrack(search) {
  const url = `${BASE_URL}&method=track.search&track=${search}&limit=5`;

  let payload = axios.get(url);

  return {
    type: FETCH_TRACK,
    payload
  };
}


export function selectedTrack(track) {

  const url = `${BASE_URL}&method=track.getInfo&artist=${track.artist}&track=${track.name}`;

  let payload = axios.get(url);

  return {
    type: SELECTED_TRACK,
    payload
  }
}