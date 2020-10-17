import React from 'react'
import { Storage } from './Storage'
import { Type } from '../modules/Type'

export interface AuthState {
  isAuthenticated: boolean
  user: Type.User | null
}

export const AuthContext = React.createContext<AuthState>({
  isAuthenticated: false,
  user: null,
})

export const AuthProvider = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)
  const [currentUser, setCurrentUser] = React.useState<Type.User | null >(null)

  React.useEffect(() => {
    var user = Storage.Get<Type.User>(Storage.Key.USER)
    setCurrentUser(user)
    setIsAuthenticated(!!user)
  }, []);

  return(
    <AuthContext.Provider value={{
      isAuthenticated: isAuthenticated,
      user: currentUser,
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}