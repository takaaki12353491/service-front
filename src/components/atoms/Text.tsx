import React from 'react'

export interface TextProps {
  text: string
  className?: string
}

export const Text: React.FC<TextProps> = (props) => {
  return (
    <p {...props}>
      {props.text}
    </p>
  )
}
export default Text