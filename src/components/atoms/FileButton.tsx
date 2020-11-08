import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { IconButton, Avatar, AvatarProps } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'

export interface FileButtonProps {
  id?: string
  avator?: AvatarProps
}

const FileButton: React.FC<FileButtonProps> = (props) => {
  const classes = useStyles()
  const [ image, setImage ] = React.useState('')
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files === null || files.length === 0) return 
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result
      typeof result === 'string' && setImage(result)
    }
    reader.readAsDataURL(files[0])
  }
  return (
    <Avatar {...props.avator} src={image} alt={props.id}>
      <IconButton color='primary' aria-label='upload picture' component='label' htmlFor={props.id}>
        <input type='file' id={props.id} className={classes.input} accept='image/*' onChange={handleChangeFile} />
        <PhotoCamera/>
      </IconButton>
    </Avatar>
  )
}
export default FileButton

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
);