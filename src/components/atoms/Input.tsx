import React from 'react'

export interface InputProps {
  name: string
  type?: 'text' | 'password'
  placeholder?: string
  defaultValue?: string
  ref?: any
}

export const InputContext = React.createContext<InputProps>({
  name: ''
})

export const Input: React.FC = () => {
  const value = React.useContext(InputContext)
  const ref = React.useRef(value.ref)
  return (
    <input ref={ref} {...value}/>
  )
}
export default Input