import { combineReducers } from "redux";
import TrackReducer from "./reducer_track";
import SelectedTrackReducer from "./reducer_selected_track";

const rootReducer = combineReducers({
  tracks: TrackReducer,
  selectedTrack: SelectedTrackReducer
});

export default rootReducer;
