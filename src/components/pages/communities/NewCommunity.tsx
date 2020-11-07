import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Form, { FormContext, FormProps } from '../../organisms/Form'

const NewCommunity = () => {
  type FormData = {
    name: string
    description: string
  }
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit(value => {

  })
  const formValue: FormProps = {
    submit: onSubmit,
    button: { text: 'Submit' },
    items: [
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
  }
  return (
    <FormContext.Provider value={formValue}>
      <Form/>
    </FormContext.Provider>
  )
}
export default NewCommunity