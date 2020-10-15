import React from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Profile from './components/pages/Profile'

function App() {
  axios.defaults = {
    baseURL: 'http://192.168.50.10:8080',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    }
  }
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
