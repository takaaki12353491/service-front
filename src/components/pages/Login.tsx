import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Auth from '../templates/Auth'
import { FormContext } from '../organisms/Form'
import { NavigationContext } from '../molecules/Navigation'
import { Axios } from '../../modules/Axios'
import { Type } from '../../modules/Type'
import { Storage } from '../../modules/Storage'
import { Name } from '../../consts/Name'

const Login: React.FC = () => {
  const history = useHistory()
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
    formData.append(Name.IDENTITY, value.identity)
    formData.append(Name.PASSWORD, value.password)
    Axios.MPFD
      .post(Axios.URL.LOGIN, formData)
      .then((res: Axios.Response<Response>) => {
        if (res.status === 200) {
          Storage.Set(Storage.Key.JWT, res.data.JWT)
          Storage.Set(Storage.Key.USER, res.data.User)
          history.push('/')
        } else {
          alert('failed')
        }
      })
      .catch(() => {
        alert('error')
      })
  })
  return(
    <FormContext.Provider value={{
      submit: onSubmit,
      button: {
        text: 'Login'
      },
      items: [
        { 
          item: {
            name: Name.IDENTITY, label: 'name or email', defaultValue: '',
            inputRef: register(),
          }
        },
        { 
          item: {
            name: Name.PASSWORD, label: 'password', type: 'password', defaultValue: '',
            inputRef: register(),
          }
        },
      ]
    }}>
      <NavigationContext.Provider value={{
        items: [
          { href:'/', text:'Home' },
          { href:'/signup', text:'Signup' },
        ]
      }}>
        <Auth title='Login'/>
      </NavigationContext.Provider>
    </FormContext.Provider>
  )
}
export default Login
