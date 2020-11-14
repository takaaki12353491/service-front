import React from 'react'

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  text: string
  className?: string
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props}>
      {props.text}
    </button>
  )
}
export default Button