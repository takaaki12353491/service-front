import React from 'react'

export interface InputProps {
  name?: string
  type?: 'text' | 'password'
  placeholder?: string
  defaultValue?: string
  onChange?: any
  inputRef?: any
  className?: string
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input 
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      ref={props.inputRef}
      className={props.className}
    />
  )
}
export default Input

Input.defaultProps={
  type: 'text'
}