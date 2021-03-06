import React from 'react'
import { Switch, Route, useRouteMatch} from "react-router-dom"
import PrivateRoute from './PrivateRoute'
import NewCommunity from '../components/pages/communities/NewCommunity'
import Community from '../components/pages/communities/Community'

const Communities: React.FC = () => {
  const match = useRouteMatch()
  
  return (
    <Switch>
      <PrivateRoute exact path={`${match.url}/new`} component={NewCommunity}/>
      <Route exact path={`${match.url}/:id`} component={Community}/>
    </Switch>
  )
}
export default Communities