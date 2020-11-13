import React from 'react'
import { useForm } from "react-hook-form"
import { ButtonContext, HeadingContext } from '../atoms'
import { NavigationContext } from '../molecules'
import { FormContext } from '../organisms'
import Auth from '../templates/Auth'
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
      items: [
        { 
          item: {
            name: 'name', placeholder: 'name', defaultValue: '',
            ref: register({ required: 'required', maxLength: 16 }), 
          },
          errMsg: errors.name?.message,
        },
        { 
          item: {
            name: 'email', placeholder: 'email', type: 'text', defaultValue: '',
            ref: register({ 
              required: 'required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            }),
          },
          errMsg: errors.email?.message
        },
        { 
          item: {
            name: 'password', placeholder: 'password', type: 'password', defaultValue: '',
            ref: register({ required: 'required' }),
          },
          errMsg: errors.password?.message
        },
      ]
    }}>
      <NavigationContext.Provider value={{
        items: [
          { href:'/', text:'Home' },
          { href:'/login', text:'Login' },
        ]
      }}>
        <ButtonContext.Provider value={{
          type: 'submit',
          text: 'Sign Up',
        }}>
          <HeadingContext.Provider value={{
            size: 3,
            text: 'Sign Up',
          }}>
            <Auth/>
          </HeadingContext.Provider>
        </ButtonContext.Provider>
      </NavigationContext.Provider>
    </FormContext.Provider>
  )
}
export default Signup
