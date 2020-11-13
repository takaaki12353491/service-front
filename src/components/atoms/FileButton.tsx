import React from 'react'
import styled from 'styled-components'
import { FaCamera } from 'react-icons/fa'

export interface FileButtonProps {
  id: string
}

export const FileButtonContext = React.createContext<FileButtonProps>({
  id: 'id',
})

export const FileButton: React.FC<{className?: string}> = (props) => {
  const value = React.useContext(FileButtonContext)
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
      <Label htmlFor={value.id}>
        <FaCamera/>
        <input type='file' id={value.id} onChange={handleChangeFile} style={{display: 'none'}}/>
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