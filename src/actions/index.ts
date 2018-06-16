import * as types from '../actionTypes'
import { SampleService } from '../domain'

export const onAppInit = (callback: any, sampleService: SampleService) => {
  sampleService.get(callback)

  return {
    type: types.ON_APP_INIT
  }
}
