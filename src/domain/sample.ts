import { APIClient } from '../infra'

export class SampleService {
  private apiClient: APIClient

  constructor(apiClient: APIClient) {
    this.apiClient = apiClient
  }

  get(callback: any) {
    this.apiClient.getSampleData(callback)
  }

}
