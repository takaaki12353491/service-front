import React from 'react'
import { useForm } from "react-hook-form"
import { AxiosResponse } from 'axios'
import Auth from '../organisms/Auth'
import { FormContext, FormProps } from '../molecules/Form'
import { NavLinkProps, NavLinkContext } from '../molecules/Navigation'
import { Axios } from '../../modules/Axios'
import { User } from '../../modules/AuthContext'
import { Storage } from '../../modules/Storage'

const Login = () => {
  type Response = {
    JWT: string
    User: User
  }
  type FormData = {
    identity: string
    password: string
  }
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit((value) => {
    const formData = new FormData()
    formData.append('identity', value.identity)
    formData.append('password', value.password)
    Axios.MPFD
      .post(Axios.URL.LOGIN, formData)
      .then((res: AxiosResponse<Response>) => {
        if (res.status === 200) {
          Storage.Set(Storage.Key.JWT, res.data.JWT)
          Storage.Set(Storage.Key.USER, res.data.User)
          window.location.href = '/'
        } else {
          alert('failed')
        }
      })
      .catch(() => {
        alert('error')
      })
  })
  const formValue: FormProps = {
    submit: onSubmit,
    button: {
      text: 'Login'
    },
    textFields: [
      { 
        name: 'identity', label: 'name or email',
        defaultValue: '',
        inputRef: register(),
      },
      { 
        name: 'password', label: 'password', type: 'password',
        defaultValue: '',
        inputRef: register(),
      },
    ]
  }
  const navLinkValue: NavLinkProps = {
    items: [
      { href:'/', text:'Home' },
      { href:'/signup', text:'Signup' },
    ]
  }
  return(
    <FormContext.Provider value={formValue}>
      <NavLinkContext.Provider value={navLinkValue}>
        <Auth title='Login'/>
      </NavLinkContext.Provider>
    </FormContext.Provider>
  )
}
export default Login
