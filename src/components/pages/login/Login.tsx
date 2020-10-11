import React from 'react'
import Auth from '../../organisms/auth/Auth'
import { FormContext, FormProps } from '../../molecules/form/Form'
import { NavLinkProps, NavLinkContext } from '../../molecules/auth/nav-links/NavLinks'

interface Props {
}

const Login: React.FC<Props> = (props) => {
  const formValue: FormProps = {
    action: '/login',
    method: 'post',
    button: {
      text: 'Login'
    },
    textFields: [
      { name: 'name', label: 'name', },
      { name: 'password', label: 'password', },
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
