import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Profile from './components/pages/Profile'
import { URL } from './consts/URL'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>   
          <Route exact path='/' component={Home}/>
          <Route exact path={URL.LOGIN} component={Login}/>
          <Route exact path={URL.SIGNUP} component={Signup}/>
          <Route exact path={URL.ID} component={Profile}/>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
