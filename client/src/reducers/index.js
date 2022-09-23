import { combineReducers } from "redux";
import currentUserReducer from "./currentUser";
import authReducer from "./auth";
import usersReducer from "./users";
import commentReducer from "./comments";
import currentUserProfileReducer from "./currentUserProfile";
import staffReducer from "./staff";
import doubtReducer from "./doubt";
export default combineReducers({
  authReducer,
  currentUserReducer,
  doubtReducer,
  usersReducer,
  currentUserProfileReducer,
  commentReducer,
  staffReducer,
});
