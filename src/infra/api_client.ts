import axios from 'axios'
import * as configs from '../configs'

// axiosのオプションを返す
interface reqOpProps {
  method: string
  endpoint: string
  data?: any,
  params?: any
  headers?: any
}

// ------------------------------- //

interface reqOption {
  endpoint: string, // endpoint url
  callback: any // callback func
  params?: any, // parameter
}

export class APIClient {
  private static getReqOption(option: reqOpProps) {
    return {
      method: option.method,
      // url: configs.env.apiBaseUri + option.endpoint,
      url: "https://jsonplaceholder.typicode.com/users",
      data: option.data,
      params: option.params
    }
  }

  private static async _reqData(method: string, endpoint: string, postParams: any, callback: any) {
    method = (method === 'POST') ? method : 'GET';

    let reqOption
    if(method === 'GET') {
      reqOption = {
        method: method,
        endpoint: endpoint,
        params: postParams
      }
    } else {
      let params = new URLSearchParams()
      for(let k in postParams) {
	params.append(k, postParams[k])
      }
      reqOption = {
        method: method,
        endpoint: endpoint,
	data: params,
	headers: {
	  'Content-Type': 'application/x-www-form-urlencoded',
	},
      }
    }
    return await axios(this.getReqOption(reqOption))
      .then(res => {
        callback(res.data)
      })
      .catch(err => {
        console.error('error => ', err)
      })
  }

  private static postData(option: reqOption) {
    this._reqData('POST', option.endpoint, option.params, option.callback)
  }

  private static getData(option: reqOption) {
    this._reqData('GET', option.endpoint, option.params, option.callback)
  }

  static getSampleData(callback: any) {
    const option = {
      endpoint: '/sample',
      callback: callback,
    }
    this.getData(option)
  }

}
