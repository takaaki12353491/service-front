import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Auth from '../templates/Auth'
import { Axios, Type, Storage } from '../../modules'
import { Name, URL } from '../../consts'

export const Login: React.FC = () => {
  const history = useHistory()
  type Response = {
    JWT: string
    User: Type.User
  }
  type FormData = {
    identity: string
    password: string
  }
  const { register, handleSubmit, errors } = useForm<FormData>()
  const onSubmit = handleSubmit(value => {
    const data = new FormData()
    data.append(Name.IDENTITY, value.identity)
    data.append(Name.PASSWORD, value.password)
    Axios.MPFD
      .post(Axios.URL.LOGIN, data)
      .then((res: Axios.Response<Response>) => {
        if (res.status === 200) {
          Storage.Set(Storage.Key.JWT, res.data.JWT)
          Storage.Set(Storage.Key.USER, res.data.User)
          history.push(URL.HOME)
        } else {
          alert('failed')
        }
      })
      .catch(() => {
        alert('error')
      })
  })
  return (
    <Auth
      heading={{ text: 'Login' }}
      form={{
        submit: onSubmit,
        items: [
          { 
            label: 'Name',
            item: {
              name: Name.IDENTITY, 
              placeholder: 'name or email',
              inputRef: register({
                required: 'Name or email is required'
              }),
            },
            errMsg: errors.identity?.message
          },
          { 
            label: 'Password',
            item: {
              name: Name.PASSWORD, 
              placeholder: 'password',
              inputRef: register({
                required: 'Password is required'
              }),
            },
            errMsg: errors.password?.message
          },
        ],
        button: { text: 'Login' },
      }}
      navigation={{
        items: [
          { href: URL.HOME , text: 'Home' },
          { href: URL.SIGNUP , text: 'Sign up' },
        ],
      }}
    />
  )
}
export default Login
