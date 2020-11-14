import React from 'react'

export interface InputProps {
  name: string
  type?: 'text' | 'password'
  placeholder?: string
  defaultValue?: string
  ref?: any
  className?: string
}

export const Input: React.FC<InputProps> = (props) => {
  const ref = React.useRef(props.ref)
  return (
    <input ref={ref} {...props}/>
  )
}
export default Input