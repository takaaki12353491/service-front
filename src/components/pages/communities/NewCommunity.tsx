import React from 'react'
import { useForm } from "react-hook-form"
import Form, { FormContext, FormProps } from '../../organisms/Form'

const NewCommunity: React.FC = () => {
  type FormData = {
    name: string
    description: string
  }
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit(value => {

  })
  return (
    <FormContext.Provider value={{
      submit: onSubmit,
      button: { text: 'Submit' },
      items: [
        {
          item: {
            id: 'header',
          }
        },
        {
          item: {
            id: 'icon'
          }
        },
        {
          item: {
            name: 'name', label: 'name',
            inputRef: register(),
          }
        },
        {
          item: {
            name: 'description', label: 'description',
            multiline: true, rows: 4,
            inputRef: register(),
          }
        },
      ]
    }}>
      <Form/>
    </FormContext.Provider>
  )
}
export default NewCommunity
