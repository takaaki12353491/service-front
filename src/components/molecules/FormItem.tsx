import React from 'react'
import styled from 'styled-components'
import { 
  Label,
  Input, InputProps,
  FileUploader, FileUploaderProps,
  Text, 
} from '../atoms'

export interface FormItemProps {
  label? :string
  item: InputProps | FileUploaderProps
  errMsg?: string
}

export const FormItem: React.FC<FormItemProps> = (props) => {
  const getItem = () => {
    if (isInput(props.item)) {
      return <Input {...props.item}/>
    } else if (isFileUploader(props.item)) {
      return <FileUploader {...props.item}/>
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

const isFileUploader = (item: any): item is FileUploaderProps =>
  item.id !== undefined

const Container = styled.div`
  text-align: center;
`

const FormLabel = styled(Label)`
  display: block;
`

const ErrorText = styled(Text)`
  color: red;
`