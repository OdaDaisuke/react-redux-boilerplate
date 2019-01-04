import * as types from '../actionTypes'
import { initialState, InitialStateInterface } from '../configs'
import { IAction } from './index'

const mainReducer = (state: InitialStateInterface = initialState, action: IAction): InitialStateInterface => {
  switch(action.type) {
    case types.ON_APP_INIT:
      return Object.assign({}, state, {
	      appState: "Ready.",
      })

    default:
      return state
  }
}

export default mainReducer
