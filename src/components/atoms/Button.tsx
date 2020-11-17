import React from 'react'
import styled from 'styled-components'

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

export const CVButton = styled(Button)`
  display: block;
  font-size: 14px;
  height: 40px;
  color: #fff;
  width: 200px;
  cursor: pointer;
  border: 2px solid #5AA72A;
  background-color: #5AA72A;
  transition: 0.3s;
  &:hover {
    background-color: #fff;
    color: #5AA72A;
  }
`