import React, { useContext } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { AuthContext } from "../modules/AuthContext";

const PrivateRoute = (props: RouteProps) => {
  const value = useContext(AuthContext);
  const Component = value.isAuthenticated ? <Route {...props}/> : <Redirect to='/login'/>
  return (
    Component
  )
}
export default PrivateRoute;