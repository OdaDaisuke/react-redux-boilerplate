import * as snapshotDiff from 'snapshot-diff'
import reducerTester from 'reducer-tester'
import { IAction } from '../src/reducers'
import reducers from '../src/reducers'
import mainReducer from '../src/reducers/main'
import * as types from '../src/actionTypes'
import { initialState, IInitialState } from '../src/configs'

const reducer = mainReducer

describe("Reducer", () => {

    // test("[By snapshot]Pass the ON_APP_INIT", () => {
    //     const action: IAction = { type: types.ON_APP_INIT }
    //     const state: IInitialState = mainReducer(initialState, action)
    //     expect(snapshotDiff(initialState, state)).toMatchSnapshot()
    // })

    test("[By match object]Pass the ON_APP_INIT", () => {
        const action: IAction = { type: types.ON_APP_INIT }
        const state: IInitialState = mainReducer(initialState, action)
        expect(state).toMatchObject({ appState: "Ready." })
    })

    // test("[By snapshot]Pass the INC_COUNT", () => {
    //     const action: IAction = { type: types.INC_COUNT }
    //     const state: IInitialState = mainReducer(initialState, action)
    //     expect(snapshotDiff(initialState, state)).toMatchSnapshot()
    // })

    // test("[By snapshot]Pass the DEC_COUNT", () => {
    //     const action: IAction = { type: types.DEC_COUNT }
    //     const state: IInitialState = mainReducer(initialState, action)
    //     expect(snapshotDiff(initialState, state)).toMatchSnapshot()
    // })

})

reducerTester({
    reducer,
    state: initialState,
    tests: [
      { type: types.ON_APP_INIT },
      { type: types.INC_COUNT },
      { type: types.DEC_COUNT }
    ]
  })