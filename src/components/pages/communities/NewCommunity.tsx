import React from 'react'
import { useForm } from "react-hook-form"
import Form from '../../organisms/Form'
import Base from '../../templates/Base'

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
      <Form
        submit={onSubmit}
        items={[]}
        button={{
          type: 'submit',
          text: 'Create'
        }}
      />
    </Base>    
  )
}
export default NewCommunity
