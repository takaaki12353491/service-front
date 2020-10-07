import axiosBase from 'axios'

export const axios = axiosBase.create({
  baseURL: 'http://192.168.50.10:8080',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'  
})