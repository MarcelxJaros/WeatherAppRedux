import IMyWeatherData from '../../models/IMyWeatherData';
import IWeatherData from '../../models/IWeatherDataApi';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const initialState = {
  forecast: undefined,
  today: undefined,
  timeUnits: undefined,
  minMax: undefined,
  meta: undefined,
};

// interface IWeatherData

export const weatherReducer = (state: IMyWeatherData = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SETWEATHERDATA:
      return action.payload;
    default:
      return state;
  }
};
