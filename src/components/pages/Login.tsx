import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Auth from '../organisms/Auth'
import { FormContext, FormProps } from '../molecules/Form'
import { NavLinkProps, NavLinkContext } from '../molecules/Navigation'
import { Axios } from '../../modules/Axios'
import { Type } from '../../modules/Type'
import { Storage } from '../../modules/Storage'

const Login = () => {
  type Response = {
    JWT: string
    User: Type.User
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
      .then((res: Axios.Response<Response>) => {
        if (res.status === 200) {
          Storage.Set(Storage.Key.JWT, res.data.JWT)
          Storage.Set(Storage.Key.USER, res.data.User)
          useHistory().push('/')
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
