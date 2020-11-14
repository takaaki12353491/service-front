import React from 'react'

export interface LinkProps {
  text: string
  href: string
  className?: string
}
export const Link: React.FC<LinkProps> = (props) => {
  return (
    <a {...props}>
      {props.text}
    </a>
  )
}
export default Link