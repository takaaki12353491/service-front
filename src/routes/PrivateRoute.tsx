import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom'
import URL from '../consts/URL'
import { State } from '../modules/State'

const PrivateRoute = (props: RouteProps) => {
  return State.isAuthenticated() ? <Route {...props}/> : <Redirect to={URL.LOGIN}/>
}
export default PrivateRoute