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
  type: ActionType.GETWEATHERDATA,
}
interface SetChartDataAction {
  type: ActionType.SETCHARTDATA,
}

export type Action = IncrementAction | DecrementAction | ResetAction | GetWeatherDataAction | SetChartDataAction;
