import React from 'react'
import { CVButton, ButtonProps } from '../atoms'
import { FormItem, FormItemProps } from '../molecules'

export interface FormProps {
  submit: () => void
  items: FormItemProps[]
  button: ButtonProps
  className?: string
}

export const Form: React.FC<FormProps> = (props) => {
  return (
    <form onSubmit={props.submit} className={props.className}>
      {props.items.map(item => {
        return <FormItem key={item.item.name} {...item}/>
      })}
      <CVButton {...props.button}/>
    </form>
  )
}
export default Form

CVButton.defaultProps={
  type: 'submit'
}
