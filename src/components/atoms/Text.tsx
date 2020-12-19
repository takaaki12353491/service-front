import React from 'react'

export interface TextProps {
  content?: string
  className?: string
}

export const Text: React.FC<TextProps> = (props) => {
  return (
    <p {...props}>
      {props.content}
    </p>
  )
}
export default Text