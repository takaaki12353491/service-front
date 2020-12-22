import React from 'react'
import styled from 'styled-components'

export interface TextProps {
  content?: string
  className?: string
}

export const Text: React.FC<TextProps> = (props) => {
  return (
    <P className={props.className}>
      {props.content}
    </P>
  )
}
export default Text

const P = styled.p`
  margin: 0;
`