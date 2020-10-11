import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/auth/AuthContext'
import Home from './components/pages/home/Home'
import Login from './components/pages/login/Login'
import Signup from './components/pages/signup/Signup'
import Profile from './components/pages/profile/Profile'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>   
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/:id" component={Profile}/>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
