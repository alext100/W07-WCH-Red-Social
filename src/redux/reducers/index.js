import { combineReducers } from "redux";
import userActionsReducer from "./userActionsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  user: usersReducer,
  usersList: userActionsReducer,
});

export default rootReducer;
