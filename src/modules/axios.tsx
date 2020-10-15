import axios from 'axios'

axios.defaults = {
  baseURL: 'http://192.168.50.10:8080',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  }
}

export const mpfdReq = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})