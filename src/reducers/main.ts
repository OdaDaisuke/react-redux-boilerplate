import * as types from '../actionTypes'
import { initialState } from '../configs'

const mainReducer = (state: any = initialState, action: any) => {
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
