import React from 'react'
import FormItem, { FormItemProps } from '../molecules/FormItem'
import Button, { ButtonProps } from '../atoms/Button'

export interface FormProps {
  submit?: () => {}
  button?: ButtonProps
  items?: FormItemProps[]
}

export const FormContext = React.createContext<FormProps>({})

const Form: React.FC = () => {
  const value = React.useContext(FormContext)
  const list = []
  const items = value.items ? value.items : []
  for (const item of items) {
    list.push(
      <FormItem {...item} key={list.length}/>
    )
  }
  return (
    <form onSubmit={value.submit}>
      {list}
      <Button {...value.button} type='submit'/>
    </form>
  )
}
export default Form