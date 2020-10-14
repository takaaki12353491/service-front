import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { TextField, TextFieldProps } from '@material-ui/core'
import Button, { ButtonProps } from '../atoms/Button'

export interface FormProps {
  submit?: () => {}
  button?: ButtonProps
  textFields?: TextFieldProps[]
}

export const FormContext = React.createContext<FormProps>({})

const Form: React.FC = () => {
  const classes = useStyles()
  const value = React.useContext(FormContext)
  const list = []
  const items = value.textFields ? value.textFields : []
  for (const item of items) {
    list.push(
      <TextField {...item} key={item.name} className={classes.textField} variant='outlined'/>
    )
  }
  return (
    <form className={classes.form} onSubmit={value.submit}>
      {list}
      <Button {...value.button} className={classes.submitButton} type='submit' variant='contained' color='primary'/>
    </form>
  )
}
export default Form

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: '300px',
      margin: '30px auto',
    },
    textField: {
      margin: '10px auto',
    },
    submitButton: {
      display: 'block',
      margin: '10px auto',
    },
  }),
)