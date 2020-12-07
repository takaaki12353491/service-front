import React from 'react'
import styled from 'styled-components'
import { FaCamera, FaTimes } from 'react-icons/fa'

export interface ImageUploaderProps {
  name: string
  uploaderRef?: any
  className?: string
}

export const ImageUploader: React.FC<ImageUploaderProps> = (props) => {
  const [ src, setSrc ] = React.useState<string>()
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files === null || files.length === 0) {
      setSrc(undefined)
      return
    } 
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result
      typeof result === 'string' && setSrc(result)
    }
    reader.readAsDataURL(files[0])
  }
  const handleClear = () => {
    const obj = document.getElementById(props.name) as HTMLInputElement
    obj.value = ''
    setSrc(undefined)
  }
  return (
    <Container className={props.className} src={src}>
      <Label htmlFor={props.name}>
        <FaCamera/>
        <Input 
          type='file' 
          accept='image/jpeg,image/png' 
          id={props.name} 
          name={props.name} 
          ref={props.uploaderRef} 
          onChange={handleChangeFile}
        />
      </Label>
      {src &&
        <CancelLabel onClick={handleClear}>
          <FaTimes/>
        </CancelLabel>
      }
    </Container>
  )
}
export default ImageUploader

export const HeaderUploader = styled(ImageUploader)`
  width: 600px;
  height: 200px;
`

export const IconUploader = styled(ImageUploader)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

const Container = styled.div<{
  src?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({src}) => src ? `url(${src})` : 'gray'};
  background-size: cover;
`

const Label = styled.label`
  cursor: pointer;
`

const CancelLabel = styled(Label)`
  margin-left: 20px;
`

const Input = styled.input`
  display: none;
`