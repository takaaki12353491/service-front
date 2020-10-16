import React, { useContext } from "react"
import { Route, RouteProps, Redirect } from "react-router-dom"
import { AuthContext } from "../modules/AuthContext"

const RestrictedRoute = (props: RouteProps) => {
  const value = useContext(AuthContext)
  const Component = value.isAuthenticated ? <Redirect to='/'/> : <Route {...props}/>
  return (
    Component
  )
}
export default RestrictedRoute