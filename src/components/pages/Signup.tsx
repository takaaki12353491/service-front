import React from 'react'
import { useForm } from "react-hook-form"
import Auth from '../templates/Auth'
import { Axios } from '../../modules'
import { Name, URL } from '../../consts'

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
    <Auth
      heading={{ text: 'Sign up' }}
      form={{
        submit: onSubmit,
        items: [
          { 
            heading: { text: 'Name' },
            item: {
              name: Name.NAME, 
              placeholder: 'name',
              inputRef: register({
                required: 'Name is required'
              }),
            },
            errMsg: errors.name?.message
          },
          { 
            heading: { text: 'Email' },
            item: {
              name: Name.EMAIL, 
              placeholder: 'email',
              inputRef: register({
                required: 'Email is required'
              }),
            },
            errMsg: errors.email?.message
          },
          { 
            heading: { text: 'Password' },
            item: {
              type: 'password',
              name: Name.PASSWORD, 
              placeholder: 'password',
              inputRef: register({
                required: 'Password is required'
              }),
            },
            errMsg: errors.password?.message
          },
        ],
        button: { text: 'Sign up' },
      }}
      navigation={{
        items: [
          { href: URL.HOME , text: 'Home' },
          { href: URL.LOGIN , text: 'Login' },
        ],
      }}
    />
  )
}
export default Signup
