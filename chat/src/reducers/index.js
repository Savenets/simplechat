import { combineReducers } from "redux";
import messages from "./messages";
import user from "./user";

const chat = combineReducers({
	messages,
  user,
});

export default chat;
