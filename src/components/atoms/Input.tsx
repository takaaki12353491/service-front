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

export const Input: React.FC<{className?: string}> = (props) => {
  const value = React.useContext(InputContext)
  const ref = React.useRef(value.ref)
  return (
    <input className={props.className} ref={ref} {...value}/>
  )
}
export default Input