import { combineReducers } from "redux";
import TrackReducer from "./reducer_track";

const rootReducer = combineReducers({
  track: TrackReducer
});

export default rootReducer;
