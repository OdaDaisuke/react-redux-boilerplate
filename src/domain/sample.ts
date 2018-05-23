import { APIClient } from '../infra'

export class SampleService {

  get(callback: any) {
    APIClient.getSampleData(callback)
  }

}
