import React from 'react'

export interface HeadingProps {
  size: 1 | 2 | 3 | 4 | 5 | 6
  text: string
}

export const HeadingContext = React.createContext<HeadingProps>({
  size: 1, text: ''
})

export const Heading: React.FC<{className?: string}> = (props) => {
  const value = React.useContext(HeadingContext)
  return React.createElement(
    `h${value.size}`,
    {className: props.className},
    value.text
  )
}
export default Heading