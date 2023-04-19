import IWeatherData from "../../models/IWeatherData";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialState = {
  latitude: 0,
  longitude: 0,
  generationtime_ms: 0,
  utc_offset_seconds: 0,
  timezone: '',
  timezone_abbreviation: '',
  elevation: 0,
  hourly_units: {
    time: '',
    temperature_2m: '',
  },
  hourly: {
    time: [],
    temperature_2m: [],
  },}

// interface IWeatherData

export const weatherReducer = (state: IWeatherData = initialState, action: Action) => {
  switch(action.type){
    case ActionType.SETWEATHERDATA: return action.payload;
    default: return state;
  }
}