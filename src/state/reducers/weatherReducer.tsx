import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialState = {};

export const weatherReducer = (state: object = initialState, action: Action) => {
  switch(action.type){
    case ActionType.GETWEATHERDATA: return state;
    default: return state;
  }
}