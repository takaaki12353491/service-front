import React from 'react'
import { useForm } from "react-hook-form"
import Auth from '../templates/Auth'
import { FormContext } from '../organisms/Form'
import { NavigationContext } from '../molecules/Navigation'
import { Axios } from '../../modules/Axios'

const Signup: React.FC = () => {
  type FormData = {
    name: string
    email: string
    password: string
  }
  const { register, handleSubmit, errors } = useForm<FormData>()
  const onSubmit = handleSubmit((value) => {
    const formData = new FormData()
    formData.append('name', value.name)
    formData.append('email', value.email)
    formData.append('password', value.password)
    Axios.MPFD
      .post('/signup', formData)
      .then((res) => {
        res.status === 200 ? alert('Your registration is complete') : alert(res.data)
      })
      .catch(() => {
        alert('error')
      })
  })
  return(
    <FormContext.Provider value={{
      submit: onSubmit,
      button: {
        text: 'Signup',
      },
      items: [
        { 
          item: {
            name: 'name', label: 'name', defaultValue: '',
            inputRef: register({ required: 'required', maxLength: 16 }), 
            helperText: errors.name && errors.name.message,
            error: !!errors.name,
          }
        },
        { 
          item: {
            name: 'email', label: 'email', type: 'email', defaultValue: '',
            inputRef: register({ 
              required: 'required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            }),
            helperText: errors.email && errors.email.message,
            error: !!errors.email,
          }
        },
        { 
          item: {
            name: 'password', label: 'password', type: 'password', defaultValue: '',
            inputRef: register({ required: 'required' }),
            helperText: errors.password && errors.password.message,
            error: !!errors.password,
          }
        },
      ]
    }}>
      <NavigationContext.Provider value={{
        items: [
          { href:'/', text:'Home' },
          { href:'/login', text:'Login' },
        ]
      }}>
        <Auth title='Sign Up'/>
      </NavigationContext.Provider>
    </FormContext.Provider>
  )
}
export default Signup
