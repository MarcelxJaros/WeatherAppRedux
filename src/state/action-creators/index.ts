import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions"

export const increment = (number: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INCREMENT,
      payload: number
    })
  }
}
export const decrement = (number: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DECREMENT,
      payload: number
    })
  }
}
export const reset = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET
    })
  }
}
export const getWeatherData = (weatherData: object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GETWEATHERDATA,
      payload: weatherData
    })
  }
}
export const setChartData = (chartData: object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SETCHARTDATA,
      payload: chartData
    })
  }
}
