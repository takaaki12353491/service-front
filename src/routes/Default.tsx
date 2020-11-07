import React from 'react'
import { Switch, Route } from 'react-router-dom'
import URL from '../consts/URL'
import Header from '../components/organisms/Header'
import Home from '../components/pages/Home'
import Communities from './Communities'

const Default = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path={URL.COMMUNITIES.ROOT} component={Communities}/>
      </Switch>
    </>
  )
}
export default Default