import IFormData from '../../models/IFormData';
import { ActionType } from '../action-types';
import { Action } from '../actions';

const initialState = {
  city: undefined,
  date: undefined,
  slider: undefined,
};

export const formReducer = (state: IFormData = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SETFORMDATA:
      return action.payload;
    default:
      return state;
  }
};
