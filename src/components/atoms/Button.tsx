import React from 'react'
import { Button as MButton, ButtonProps as MButtonProps } from '@material-ui/core'

export interface ButtonProps extends MButtonProps {
  text?: string
}

export const ButtonContext = React.createContext<ButtonProps>({})

const Button: React.FC<ButtonProps> = (props) => {
  const value = React.useContext(ButtonContext)
  return (
    <MButton {...value} {...props}>
      {props.text ? props.text : value.text}
    </MButton>
  )
}
export default Button