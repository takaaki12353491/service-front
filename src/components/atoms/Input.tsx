import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  type?: 'text' | 'number' | 'password' | 'url'
  inputRef?: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input {...props} ref={props.inputRef}/>
  )
}
export default Input

Input.defaultProps={
  type: 'text'
}