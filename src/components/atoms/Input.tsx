import React from 'react'

export interface InputProps {
  name: string
  type?: 'text' | 'password'
  placeholder?: string
  defaultValue?: string
  inputRef?: any
  className?: string
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input ref={props.inputRef} {...props}/>
  )
}
export default Input

Input.defaultProps={
  type: 'text'
}