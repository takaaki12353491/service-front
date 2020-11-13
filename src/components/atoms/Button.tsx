import React from 'react'

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  text?: string
  className?: string
}

export const ButtonContext = React.createContext<ButtonProps>({})

export const Button: React.FC = () => {
  const value = React.useContext(ButtonContext)
  return (
    <button {...value}>
      {value.text}
    </button>
  )
}
export default Button