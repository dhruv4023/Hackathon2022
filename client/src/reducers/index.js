import { combineReducers } from "redux";
import currentUserReducer from "./currentUser";
import authReducer from "./auth";
import usersReducer from "./users";
import commentReducer from "./comments";
import currentUserProfileReducer from './currentUserProfile'
export default combineReducers({
  authReducer, currentUserReducer, usersReducer,currentUserProfileReducer,commentReducer
})