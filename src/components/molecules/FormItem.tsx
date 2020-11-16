import React from 'react'
import styled from 'styled-components'
import { 
  Input, InputProps,
  Heading, HeadingProps,
  FileButton, FileButtonProps,
  Text, 
} from '../atoms'

export interface FormItemProps {
  heading? :HeadingProps
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
  return(
    <Container>
      {props.heading && <Heading {...props.heading}/>}
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
  flex-grow: 1;
  margin: 20px 0;
  text-align: center;
`

const ErrorText = styled(Text)`
  color: red;
`