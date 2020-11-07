import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { TextField, TextFieldProps } from '@material-ui/core'
import Heading, { HeadingProps } from '../atoms/Heading'
import FileButton, { FileButtonProps } from '../atoms/FileButton'

type ItemProps = TextFieldProps | FileButtonProps

export interface FormItemProps {
  heading? :HeadingProps
  item?: ItemProps
}

export const FormItemContext = React.createContext<FormItemProps>({})

const FormItem: React.FC = () => {
  const classes = useStyles()
  const value = React.useContext(FormItemContext)
  const getItem = () => {
    if (isTextField(value.item)) {
      return <TextField {...value.item}/>
    } else if (isFileButton(value.item)) {
      return <FileButton/>
    }
  }
  const item = getItem()
  return(
    <div className={classes.root}>
      <Heading {...value.heading}/>
      {item}
    </div>
  )
}
export default FormItem

const isTextField = (item: any): item is TextFieldProps =>
  item.type !== undefined

const isFileButton = (item: any): item is FileButtonProps =>
  item.href !== undefined

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);