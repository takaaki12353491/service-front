import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { State } from '../modules/State'

const RestrictedRoute = (props: RouteProps) => {
  const Component = State.isAuthenticated() ? <Redirect to='/'/> : <Route {...props}/>
  return Component
}
export default RestrictedRoute