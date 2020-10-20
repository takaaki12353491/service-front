import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { State } from '../modules/State'

const RestrictedRoute = (props: RouteProps) => {
  return State.isAuthenticated() ? <Redirect to='/'/> : <Route {...props}/>
}
export default RestrictedRoute