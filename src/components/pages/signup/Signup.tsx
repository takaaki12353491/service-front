import React from 'react'
import Auth from '../../organisms/auth/Auth'
import { FormContext, FormProps } from '../../molecules/form/Form'
import { NavLinkProps, NavLinkContext } from '../../molecules/auth/nav-links/NavLinks'

interface Props {
}

const Signup: React.FC<Props> = (props) => {
  const formValue: FormProps = {
    action: '/signup',
    method: 'post',
    button: {
      text: 'Signup'
    },
    textFields: [
      { name: 'name', label: 'name', },
      { name: 'email', label: 'email', },
      { name: 'password', label: 'password', },
    ]
  }
  const navLinkValue: NavLinkProps = {
    items: [
      { href:'/', text:'Home' },
      { href:'/login', text:'Login' },
    ]
  }
  return(
    <FormContext.Provider value={formValue}>
      <NavLinkContext.Provider value={navLinkValue}>
        <Auth title='Sign Up'/>
      </NavLinkContext.Provider>
    </FormContext.Provider>
  )
}
export default Signup
