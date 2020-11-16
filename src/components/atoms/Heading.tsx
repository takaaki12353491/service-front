import React from 'react'

export interface HeadingProps {
  text: string
  size?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export const Heading: React.FC<HeadingProps> = (props) => {
  return React.createElement(
    `h${props.size}`,
    { className: props.className },
    props.text
  )
}
export default Heading

Heading.defaultProps = {
  size:1
}