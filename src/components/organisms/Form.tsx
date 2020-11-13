import React from 'react'
import FormItem, { FormItemProps } from '../molecules/FormItem'
import Button from '../atoms/Button'

export interface FormProps {
  submit?: () => {}
  items?: FormItemProps[]
}

export const FormContext = React.createContext<FormProps>({})

export const Form: React.FC = () => {
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
      <Button/>
    </form>
  )
}
export default Form