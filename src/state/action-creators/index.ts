import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';
import IFormData from '../../models/IFormData';
import IHoveredPoint from '../../models/IHoveredPoint';
import IMyWeatherData from '../../models/IMyWeatherData';

export const setWeatherData = (weatherData: IMyWeatherData) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SETWEATHERDATA,
      payload: weatherData,
    });
  };
};
export const setFormData = (formData: IFormData) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SETFORMDATA,
      payload: formData,
    });
  };
};
export const setHoveredPoint = (hoveredPoint: IHoveredPoint) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SETHOVEREDPOINT,
      payload: hoveredPoint,
    });
  };
};
