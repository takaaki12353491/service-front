import React from 'react'

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  text?: string
}

export const ButtonContext = React.createContext<ButtonProps>({})

export const Button: React.FC<{className?: string}> = (props) => {
  const value = React.useContext(ButtonContext)
  return (
    <button className={props.className} {...value}>
      {value.text}
    </button>
  )
}
export default Button