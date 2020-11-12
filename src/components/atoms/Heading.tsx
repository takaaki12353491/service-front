import React from 'react'

export interface HeadingProps {
  size: 1 | 2 | 3 | 4 | 5 | 6
  text: string
  className?: string
}

export const HeadingContext = React.createContext<HeadingProps>({
  size: 1, text: ''
})

const Heading: React.FC<HeadingProps> = (props) =>{
  return React.createElement(
    `h${props.size}`,
    {className: props.className},
    props.text
  )
}
export default Heading