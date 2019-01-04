import { IAction } from '../src/reducers'
import mainReducer from '../src/reducers/main'
import * as types from '../src/actionTypes'
import { initialState, InitialStateInterface } from '../src/configs'

describe("Reducer", () => {
    test("Pass the ON_APP_INIT", () => {
        const action: IAction = { type: types.ON_APP_INIT }
        const state: InitialStateInterface = mainReducer(initialState, action)
        expect(state.appState).toBe("Ready.")
    })
})