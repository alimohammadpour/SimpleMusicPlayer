import { FETCH_TRACK } from "../actions/index";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_TRACK:
      state = action.payload.data.results.trackmatches.track.slice(0, 5);
      break;

    default:
    //
  }
  return state;
}
