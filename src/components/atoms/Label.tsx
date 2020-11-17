import React from 'react'

export interface LabelProps {
  text: string
  htmlFor?: string
}

export const Label: React.FC<LabelProps> = (props) => {
  return (
    <label {...props}>
      {props.text}
    </label>
  )
}
export default Label