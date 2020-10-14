import React from 'react'
import { getItem } from '../functions/storage'
import { userKey } from '../consts/key'

export interface User {
  id: number
  name: string
  avatorURL: string
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
    var user = getItem<User>(userKey)
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