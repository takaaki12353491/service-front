import React from 'react'
import { Link as MLink, LinkProps as MLinkProps } from '@material-ui/core'

export interface LinkProps extends MLinkProps {
  text?: string
}

const Link: React.FC<LinkProps> = (props) => {
  return (
    <MLink {...props}>
      {props.text}
    </MLink>
  )
}
export default Link