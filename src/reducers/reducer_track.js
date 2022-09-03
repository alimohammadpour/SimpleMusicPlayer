import { FETCH_TRACK } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TRACK:
      return action.payload.data.results.trackmatches.track;
  }

  return state;
}
