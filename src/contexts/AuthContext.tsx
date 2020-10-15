import React from 'react'
import { Storage } from '../modules/Storage'

export interface User {
  id: string
  name: string
  avatorURL?: string
}
export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}
export const AuthContext = React.createContext<AuthState>({
  isAuthenticated: false,
  user: null,
})

export const AuthProvider = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)
  const [currentUser, setCurrentUser] = React.useState<User | null >(null)

  React.useEffect(() => {
    var user = Storage.Get<User>(Storage.USER)
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