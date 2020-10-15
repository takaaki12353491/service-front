import React from 'react'
import { useForm } from "react-hook-form"
import Auth from '../organisms/Auth'
import { FormContext, FormProps } from '../molecules/Form'
import { NavLinkProps, NavLinkContext } from '../molecules/Navigation'
import axios from 'axios'

const Login = () => {
  type Response = {
    JwtToken: string
  }
  type FormData = {
    identity: string
    password: string
  }
  const { handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit((value) => {
    const formData = new FormData()
    formData.append('identity', value.identity)
    formData.append('password', value.password)
    axios({
      url: '/login',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    })
    .then((res) => {
      document.location.href  = '/'
      alert('You are logged in')
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
        name: 'name', label: 'name or email',
        defaultValue: '', 
      },
      { 
        name: 'password', label: 'password', type: 'password',
        defaultValue: '',
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