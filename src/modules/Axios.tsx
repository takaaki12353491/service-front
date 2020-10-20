import axios, { AxiosResponse } from 'axios'

export namespace Axios {
  export interface Response<T = any> extends AxiosResponse {
    data: T
  }

  axios.defaults = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: 'json',
  }

  export const Default = axios.create()

  export const MPFD = axios.create({
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  export namespace URL {
    export const LOGIN = '/login'
    export const COMMUNITIES = '/communities'
  }
}