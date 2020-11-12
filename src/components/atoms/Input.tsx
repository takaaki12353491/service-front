import React from 'react'

export interface InputProps {
  name: string
  type?: 'text' | 'password'
  placeholder?: string
  defaultValue?: string
  ref?: any
}

const Input = React.forwardRef((props: InputProps, ref: any) => {
  return (
    <input ref={ref} {...props}/>
  )
})
export default Input