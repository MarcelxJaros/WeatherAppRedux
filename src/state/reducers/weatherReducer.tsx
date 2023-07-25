import IWeatherData from "../../models/IWeatherData";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface WeatherInfo {
  time: string; // Date and time in ISO 8601 format, e.g., "2023-07-18T00:00"
  temperature_2m: number; // Temperature at 2 meters above the ground (in Celsius)
  apparent_temperature: number; // Apparent temperature (in Celsius)
  rain: number; // Rainfall (in mm)
  showers: number; // Showers (in mm)
  snowfall: number; // Snowfall (in mm)
  windspeed_10m: number; // Wind speed at 10 meters above the ground (in m/s)
  weathercode: number; // Weather code representing the weather condition (e.g., 0 for clear sky, 1 for cloudy, 2 for partly cloudy, etc.)
}

const initialState = {
  forecast: {
    temperature_2m: undefined,
    apparent_temperature: undefined,
  },
  today: {
    temperature_2m: undefined,
    apparent_temperature: undefined,
  },
  timeUnits: undefined
  }

// interface IWeatherData

export const weatherReducer = (state: any = initialState, action: Action) => {
  switch(action.type){
    case ActionType.SETWEATHERDATA: return action.payload;
    default: return state;
  }
}