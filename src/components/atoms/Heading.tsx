import React from 'react'

const Heading: React.FC<{
  size: 1 | 2 | 3 | 4 | 5 | 6
  text: string
  className?: string
}> = (props) =>{
  return React.createElement(
    `h${props.size}`,
    {},
    props.text
  )
}
export default Heading