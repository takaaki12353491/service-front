import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { Name, URL } from '../../../consts'
import { Axios, Storage } from '../../../modules'
import Base from '../../templates/Base'
import { HeaderUploader, IconUploader, CVButton } from '../../atoms'
import { InputField } from '../../molecules'

export const NewCommunity: React.FC = () => {
  const history = useHistory()
  type FormData = {
    name: string
    description?: string
    icon?: FileList
    header?: FileList
  }
  const { register, handleSubmit, errors } = useForm<FormData>()
  const onSubmit = handleSubmit(value => {
    const data = new FormData()
    data.append(Name.NAME, value.name)
    value.description && data.append(Name.DESCRIPTION, value.description)
    value.icon && data.append(Name.ICON, value.icon[0])
    value.header && data.append(Name.HEADER, value.header[0])
    Axios.MPFD
      .post(
        Axios.URL.COMMUNITIES,
        data,
        {
          headers: {
            Authorization: Storage.Get(Storage.Key.JWT),
          },
        }
      )
      .then(res => {
        res.status === 200 ? alert('success') : alert('failed')
      })
  })
  return (
    <Base>
      <Form onSubmit={onSubmit}>
        <HeaderUploader name={Name.HEADER} uploaderRef={register()}/>
        <MiddleContainer>
          <IconUploader name={Name.ICON} uploaderRef={register()}/>
          <NameField label='Name' errMsg={errors.name?.message}>
            <input 
              name={Name.NAME}
              placeholder='name'
              ref={register({
                required: 'Name is required'
              })}
            />
          </NameField>
        </MiddleContainer>
        <DescriptionField label='Description'>
          <TextArea name={Name.DESCRIPTION} rows={4} ref={register()}/>
        </DescriptionField>
        <SubmitButton
          type='submit'
          text='Submit'
        />
      </Form>
    </Base>    
  )
}
export default NewCommunity

const Form = styled.form`
`

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
`

const NameField = styled(InputField)`
`

const DescriptionField = styled(InputField)`
  margin:20px 0;
`

const TextArea = styled.textarea`
  width: 100%;
`

const SubmitButton = styled(CVButton)`
  margin: 0 auto;
`