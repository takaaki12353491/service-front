import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import FormItem, { FormItemProps } from '../molecules/FormItem'
import Button, { ButtonProps } from '../atoms/Button'

export interface FormProps {
  submit?: () => {}
  button?: ButtonProps
  items?: FormItemProps[]
}

export const FormContext = React.createContext<FormProps>({})

const Form: React.FC = () => {
  const classes = useStyles()
  const value = React.useContext(FormContext)
  const list = []
  const items = value.items ? value.items : []
  for (const item of items) {
    list.push(
      <FormItem {...item} key={list.length}/>
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
    item: {
      width: '100%',
      margin: '10px auto',
    },
    submitButton: {
      display: 'block',
      margin: '10px auto',
    },
  }),
)