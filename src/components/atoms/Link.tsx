import React from 'react'
import styled from 'styled-components'

export interface LinkProps {
  text: string
  href: string
  className?: string
}
export const Link: React.FC<LinkProps> = (props) => {
  return (
    <A {...props}>
      {props.text}
    </A>
  )
}
export default Link

const A = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`