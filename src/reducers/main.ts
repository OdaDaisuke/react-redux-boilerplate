import * as types from '../actionTypes'
import { initialState, InitialStateInterface } from '../configs'
import { IAction } from './index'

const mainReducer = (state: InitialStateInterface = initialState, action: IAction): InitialStateInterface => {
  switch(action.type) {
    case types.ON_APP_INIT:
      return { ...state, appState: "Ready." }

    case types.INC_COUNT:
      return { ...state, count: ++state.count }

    case types.DEC_COUNT:
      return { ...state, count: --state.count }

    default:
      return state
  }
}

export default mainReducer
