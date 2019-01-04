import { combineReducers } from 'redux'
import mainReducer from './main'

export interface IAction {
  type: string
}

const reducers = combineReducers({
  mainReducer,
})

export default reducers
