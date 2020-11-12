import React from 'react'
import { useForm } from "react-hook-form"
import Base from '../../templates/Base'
import { ButtonContext } from '../../atoms/Button'
import Form, { FormContext } from '../../organisms/Form'

const NewCommunity: React.FC = () => {
  type FormData = {
    name: string
    description: string
  }
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit(value => {

  })
  return (
    <Base>
      <FormContext.Provider value={{
        submit: onSubmit,
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
              name: 'name', placeholder: 'name',
              ref: register(),
            }
          },
          {
            item: {
              name: 'description', placeholder: 'description',
              ref: register(),
            }
          },
        ]
      }}>
        <ButtonContext.Provider value={{
          type: 'submit',
          text: 'Submit'
        }}>
          <Form/>
        </ButtonContext.Provider>
      </FormContext.Provider>
    </Base>    
  )
}
export default NewCommunity
