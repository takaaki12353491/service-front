import React from 'react'

interface Props {
  size: "1" | "2" | "3" | "4" | "5" | "6"
  text?: string
}

const Heading: React.FC<Props> = (props) =>{
  return React.createElement(
    `h${props.size}`,
    {},
    props.text
  )
}
export default Heading