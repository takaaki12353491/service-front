import React from 'react'
import styled from 'styled-components'

export interface LinkProps {
  href: string
  text: string
  className?: string
}

const Link: React.FC<LinkProps> = (props) => {
  return (
    <a className={props.className} href={props.href}>
      {props.text}
    </a>
  )
}
export default Link