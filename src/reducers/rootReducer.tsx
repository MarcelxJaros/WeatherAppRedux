import isLogged from "./isLogged";
import counter from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  myCounter: counter,
  isLogged: isLogged,
  // this is same as this:
  // counter,
  // isLogged
})

export default rootReducer;