import axios from 'axios'

export namespace Axios {
  axios.defaults = {
    baseURL: 'http://192.168.50.10:8080',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    responseType: 'json',
  }

  export const MPFD = axios.create({
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  export namespace URL{
    export const LOGIN = '/login'
  }
}