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
export const reset = (number: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET,
      payload: number
    })
  }
}
