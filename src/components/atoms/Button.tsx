import React from 'react'

export interface ButtonProps {
  text?: string
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export const ButtonContext = React.createContext<ButtonProps>({})

const Button: React.FC<ButtonProps> = (props) => {
  const value = React.useContext(ButtonContext)
  return (
    <button {...value} {...props}>
      {props.text ? props.text : value.text}
    </button>
  )
}
export default Button