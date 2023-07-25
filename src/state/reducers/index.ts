import { combineReducers, Reducer } from "redux";
import { weatherReducer } from "./weatherReducer";
import { formReducer } from "./formReducer";
import { hoveredReducer } from "./hoveredReducer";


export const reducers = combineReducers({
  weatherdata: weatherReducer,
  formData: formReducer,
  hoveredPoint: hoveredReducer
})

export type State = ReturnType<typeof reducers>