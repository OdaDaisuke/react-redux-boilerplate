import { APIClient } from '../infra'
import { SampleService } from '.'

export class DomainFactory {
  sampleService: SampleService
  apiClient: APIClient

  constructor() {
    this.apiClient = new APIClient()
    this.sampleService = new SampleService(this.apiClient)
  }
}
