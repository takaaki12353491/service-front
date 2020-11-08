import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form"
import Form, { FormContext, FormProps } from '../../organisms/Form'

const NewCommunity = () => {
  const classes = useStyles()
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
          id: 'header',
          avator: {
            variant: 'square',
            className: classes.header, 
          },
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
  }
  return (
    <FormContext.Provider value={formValue}>
      <Form/>
    </FormContext.Provider>
  )
}
export default NewCommunity

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      width: '100%',
    },
  }),
)