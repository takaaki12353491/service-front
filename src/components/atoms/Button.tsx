import React from 'react'
import { Button as MButton, ButtonProps as MButtonProps } from '@material-ui/core'

export interface ButtonProps extends MButtonProps {
  text?: string
}

export const ButtonContext = React.createContext<ButtonProps>({})

const Button: React.FC = () => {
  const value = React.useContext(ButtonContext)
  return (
    <MButton {...value}>
      {value.text}
    </MButton>
  )
}
export default Button