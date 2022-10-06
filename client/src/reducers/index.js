import { combineReducers } from "redux";
import currentUserReducer from "./currentUser";
import authReducer from "./auth";
import usersReducer from "./users";
import commentReducer from "./comments";
import currentUserProfileReducer from "./currentUserProfile";
import staffReducer from "./staff";
import serviceReducer from "./Service";
import doubtReducer from "./doubt";
import submitFormReducer from "./submitform";
import homedataReducer from "./homedata";
export default combineReducers({
  authReducer,
  currentUserReducer,
  doubtReducer,
  usersReducer,
  currentUserProfileReducer,
  commentReducer,
  staffReducer,
  serviceReducer,
  submitFormReducer,
  homedataReducer,
});
