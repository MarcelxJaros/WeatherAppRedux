import { ActionType } from "../action-types";


interface IncrementAction {
  type: ActionType.INCREMENT,
  payload: number
}
interface DecrementAction {
  type: ActionType.DECREMENT,
  payload: number
}
interface ResetAction {
  type: ActionType.RESET,
}
interface GetWeatherDataAction {
  payload: any;
  type: ActionType.SETWEATHERDATA,
}
interface SetChartDataAction {
  payload: any;
  type: ActionType.SETFORMDATA,
}

export type Action = IncrementAction | DecrementAction | ResetAction | GetWeatherDataAction | SetChartDataAction;
