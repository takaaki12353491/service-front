import React from 'react'
import styled from 'styled-components'
import { FaCamera } from 'react-icons/fa'

export interface FileButtonProps {
  id: string
  className?: string
}

export const FileButton: React.FC<FileButtonProps> = (props) => {
  const [ src, setSrc ] = React.useState<string>()
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files === null || files.length === 0) return 
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result
      typeof result === 'string' && setSrc(result)
    }
    reader.readAsDataURL(files[0])
  }
  return (
    <Container className={props.className} src={src}>
      <Label htmlFor={props.id}>
        <FaCamera/>
        <input type='file' id={props.id} onChange={handleChangeFile} style={{display: 'none'}}/>
      </Label>
    </Container>
  )
}
export default FileButton

const Container = styled.div<{
  src?: string
}>`
  background: ${({src}) => src ? `url(${src})` : 'gray'};
`

const Label = styled.label`
  cursor: pointer;
`