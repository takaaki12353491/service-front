import React from 'react'

export interface InputProps {
  name?: string
  type?: 'text' | 'number' | 'password' | 'url'
  placeholder?: string
  defaultValue?: string
  maxLength?: number
  minLength?: number
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
      maxLength={props.maxLength}
      minLength={props.minLength}
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