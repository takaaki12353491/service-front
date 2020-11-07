import React from 'react'
import { Button as MButton, ButtonProps as MButtonProps } from '@material-ui/core'

export interface FileButtonProps extends MButtonProps {
  text?: string
}

export const FileButtonContext = React.createContext<FileButtonProps>({})

const FileButton: React.FC = () => {
  const value = React.useContext(FileButtonContext)
  return (
    <MButton {...value}>
      {value.text}
      <input type="file" style={{ display: "none" }}/>
    </MButton>
  )
}
export default FileButton