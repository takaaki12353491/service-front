import React from 'react'
import styled from 'styled-components'
import { 
  Input, InputProps, InputContext,
  Heading, HeadingProps, HeadingContext,
  Text, 
} from '../atoms'
import FileButton, { FileButtonProps, FileButtonContext } from '../atoms/FileButton'

type ItemProps = InputProps | FileButtonProps

export interface FormItemProps {
  heading? :HeadingProps
  item?: ItemProps
  errMsg?: string
}

export const FormItemContext = React.createContext<FormItemProps>({})

export const FormItem: React.FC = (props) => {
  return(
    <Container>
      <Heading/>
      {props.children}
      <ErrorText/>
    </Container>
  )
}
export default FormItem

const isInput = (item: any): item is InputProps =>
  item.name !== undefined

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