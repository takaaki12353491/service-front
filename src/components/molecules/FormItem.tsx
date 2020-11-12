import React from 'react'
import Input, { InputProps } from '../atoms/Input'
import Heading, { HeadingProps } from '../atoms/Heading'
import FileButton, { FileButtonProps } from '../atoms/FileButton'
import styled from 'styled-components'

type ItemProps = InputProps | FileButtonProps

export interface FormItemProps {
  heading? :HeadingProps
  item?: ItemProps
  errMsg?: string
}

export const FormItemContext = React.createContext<FormItemProps>({})

const FormItem: React.FC<FormItemProps> = (props) => {
  const getItem = () => {
    if (isTextField(props.item)) {
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
    </Container>
  )
}
export default FormItem

const isTextField = (item: any): item is InputProps =>
  item.name !== undefined

const isFileButton = (item: any): item is FileButtonProps =>
  item.id !== undefined

const Container = styled.div`
  flex-grow: 1;
  margin: 20px 0;
  text-align: center;
`