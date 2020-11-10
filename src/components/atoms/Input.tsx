import React from 'react'

export interface InputProps {
  name: string
  placeholder?: string
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input {...props}/>
  )
}
export default Input