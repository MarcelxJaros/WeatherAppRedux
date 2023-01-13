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

export type Action = IncrementAction | DecrementAction | ResetAction;
