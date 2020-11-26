import React from 'react'
import styled from 'styled-components'
import { 
  Label,
  Input, InputProps,
  ImageUploader, ImageUploaderProps,
  Text, 
} from '../atoms'

export interface FormItemProps {
  label? :string
  item: InputProps | ImageUploaderProps
  errMsg?: string
}

export const FormItem: React.FC<FormItemProps> = (props) => {
  const getItem = () => {
    if (isInput(props.item)) {
      return <Input {...props.item}/>
    } else if (isImageUploader(props.item)) {
      return <ImageUploader {...props.item}/>
    }
  }
  const item = getItem()
  return (
    <Container>
      {props.label && <FormLabel text={props.label} htmlFor={props.item.name}/>}
      {item}
      {props.errMsg && <ErrorText text={props.errMsg}/>}
    </Container>
  )
}
export default FormItem

const isInput = (item: any): item is InputProps =>
  item.placeholder !== undefined

const isImageUploader = (item: any): item is ImageUploaderProps =>
  item.uploaderRef !== undefined

const Container = styled.div`
`

const FormLabel = styled(Label)`
  display: block;
`

const ErrorText = styled(Text)`
  color: red;
`