import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { URL } from '../consts'
import { State } from '../modules'

export const RestrictedRoute: React.FC<RouteProps> = (props) => {
  return State.isAuthenticated() ? <Redirect to={URL.HOME}/> : <Route {...props}/>
}
export default RestrictedRoute