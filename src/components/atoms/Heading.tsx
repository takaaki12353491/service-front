import React from 'react'

export interface HeadingProps {
  size?: "1" | "2" | "3" | "4" | "5" | "6"
  text?: string
}

const Heading: React.FC<HeadingProps> = (props) =>{
  return React.createElement(
    `h${props.size}`,
    {},
    props.text
  )
}
export default Heading