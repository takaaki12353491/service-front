import React from 'react'
import { Button as MButton, ButtonProps as MButtonProps } from '@material-ui/core'

export interface FileButtonProps extends MButtonProps {
  text?: string
}

const FileButton: React.FC<FileButtonProps> = (props) => {
  return (
    <MButton {...props}>
      {props.text}
      <input type='file' style={{ display: 'none' }}/>
    </MButton>
  )
}
export default FileButton