import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { URL } from '../consts'
import { State } from '../modules'

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  return State.isAuthenticated() ? <Route {...props}/> : <Redirect to={URL.LOGIN}/>
}
export default PrivateRoute