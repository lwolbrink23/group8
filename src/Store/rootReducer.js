// rootReducer.js
import { combineReducers } from "redux";
import authReducer from "./authReducer"; // Update the path

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers if needed
});

export default rootReducer;
