import { Type } from '../modules/Type'
import { Storage } from './Storage'

export namespace State {
  export const isAuthenticated = () => {
    const user = Storage.Get<Type.User>(Storage.Key.USER)
    return !!user
  }
}