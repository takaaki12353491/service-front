import React from 'react'
import styled from 'styled-components'
import { 
  Label,
  Input, InputProps,
  FileButton, FileButtonProps,
  Text, 
} from '../atoms'

export interface FormItemProps {
  label? :string
  item: InputProps | FileButtonProps
  errMsg?: string
}

export const FormItem: React.FC<FormItemProps> = (props) => {
  const getItem = () => {
    if (isInput(props.item)) {
      return <Input {...props.item}/>
    } else if (isFileButton(props.item)) {
      return <FileButton {...props.item}/>
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

const isFileButton = (item: any): item is FileButtonProps =>
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