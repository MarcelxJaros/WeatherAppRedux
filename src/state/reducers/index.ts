import { combineReducers, Reducer } from "redux";
import {countReducer} from "./countReducer";
import { weatherReducer } from "./weatherReducer";


export const reducers = combineReducers({
  count: countReducer,
  weatherdata: weatherReducer
})

export type State = ReturnType<typeof reducers>