import { ActionType } from "../action-types";

interface GetWeatherDataAction {
  payload: any;
  type: ActionType.SETWEATHERDATA,
}
interface SetChartDataAction {
  payload: any;
  type: ActionType.SETFORMDATA,
}
interface SetHoveredPoint {
  payload: any;
  type: ActionType.SETHOVEREDPOINT,
}

export type Action = GetWeatherDataAction | SetChartDataAction | SetHoveredPoint;
