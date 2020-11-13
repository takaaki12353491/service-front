import React from 'react'

export interface TextProps {
  text: string
}

export const TextContext = React.createContext<TextProps>({
  text: ''
})

export const Text: React.FC<{className?: string}> = (props) => {
  const value = React.useContext(TextContext)
  return (
    <p className={props.className}>
      {value.text}
    </p>
  )
}
export default Text