import { combineReducers } from "redux";
import TrackReducer from "./reducer_track";

const rootReducer = combineReducers({
  tracks: TrackReducer
});

export default rootReducer;
