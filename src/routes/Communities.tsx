import React from 'react'
import { Switch, Route, Link, useParams, useRouteMatch} from "react-router-dom"
import PrivateRoute from './PrivateRoute'
import NewCommunity from '../components/pages/communities/NewCommunity'

const Communities = () => {
  const match = useRouteMatch()
  
  return (
    <Switch>
      <PrivateRoute exact path={`${match.url}/new`} component={NewCommunity}/>
      <Route exact path={`${match.url}}/:id`}/>
    </Switch>
  )
}
export default Communities