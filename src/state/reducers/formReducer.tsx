import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialState = 0;

export const formReducer = (state: number = initialState, action: Action) => {
  switch(action.type){
    case ActionType.SETFORMDATA: return action.payload;
    default: return state;
  }
}