import { combineReducers, Reducer } from "redux";
import {countReducer} from "./countReducer";
import { weatherReducer } from "./weatherReducer";
import { formReducer } from "./formReducer";


export const reducers = combineReducers({
  count: countReducer,
  weatherdata: weatherReducer,
  formData: formReducer
})

export type State = ReturnType<typeof reducers>