import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { Storage } from '../modules/Storage'
import { Type } from '../modules/Type'
import { URL } from '../consts/URL'

const PrivateRoute = (props: RouteProps) => {
  const user = Storage.Get<Type.User>(Storage.Key.USER)
  const isAuthenticated = !!user
  const Component = isAuthenticated ? <Route {...props}/> : <Redirect to={URL.LOGIN}/>
  return Component
}
export default PrivateRoute