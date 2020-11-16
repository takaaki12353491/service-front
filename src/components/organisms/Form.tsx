import React from 'react'
import { Button, ButtonProps } from '../atoms'
import { FormItem, FormItemProps } from '../molecules'

export interface FormProps {
  submit: () => {}
  items: FormItemProps[]
  button: ButtonProps
  className?: string
}

export const Form: React.FC<FormProps> = (props) => {
  const list = []
  for (const item of props.items) {
    list.push(
      <FormItem key={list.length} {...item}/>
    )
  }
  return (
    <form onSubmit={props.submit}>
      {list}
      <Button {...props.button}/>
    </form>
  )
}
export default Form

Button.defaultProps={
  type: 'submit'
}