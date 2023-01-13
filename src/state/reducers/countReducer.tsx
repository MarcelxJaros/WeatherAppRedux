import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialState = 0;

const countReducer = (state: number = initialState, action: Action) => {
  switch(action.type){
    case ActionType.INCREMENT: return state + action.payload;
    case ActionType.DECREMENT: return state - action.payload;
    case ActionType.RESET: return 0;
    default: return state;
  }
}

export default countReducer;