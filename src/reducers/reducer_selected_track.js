import { SELECTED_TRACK } from "../actions/index";

export default function (state = null, action) {
  switch (action.type) {
    case SELECTED_TRACK: 
      return action.payload.data.track;
  }

  return state;
}
