import dayjs from "dayjs";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const initialState = {index: -1, time: "00:00"};

export const hoveredReducer = (state: IHoveredPoint = initialState, action: Action) => {
  switch(action.type){
    case ActionType.SETHOVEREDPOINT: return action.payload;
    default: return state;
  }
}