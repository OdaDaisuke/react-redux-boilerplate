import * as types from '../actionTypes'
import { SampleService } from '../domain'

const sampleService = new SampleService()

export const onAppInit = (callback: any) => {
  // YOUR ACTIONS
  sampleService.get(callback)

  return {
    type: types.ON_APP_INIT
  }
}
