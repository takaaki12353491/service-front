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

const FormItem: React.FC<FormItemProps> = (props) => {
  const classes = useStyles()
  const getItem = () => {
    if (isTextField(props.item)) {
      return <TextField {...props.item} variant='outlined'/>
    } else if (isFileButton(props.item)) {
      return <FileButton {...props.item}/>
    }
  }
  const item = getItem()
  return(
    <div className={classes.root}>
      {props.heading && <Heading {...props.heading}/>}
      {item}
    </div>
  )
}
export default FormItem

const isTextField = (item: any): item is TextFieldProps =>
  item.name !== undefined

const isFileButton = (item: any): item is FileButtonProps =>
  item.id !== undefined

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: '20px 0',
      textAlign: 'center',
    },
  }),
);