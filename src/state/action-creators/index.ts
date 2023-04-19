import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions"
import IFormData from "../../models/IFormData"

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
export const setWeatherData = (weatherData: object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SETWEATHERDATA,
      payload: weatherData
    })
  }
}
export const setFormData = (formData: IFormData) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SETFORMDATA,
      payload: formData
    })
  }
}
