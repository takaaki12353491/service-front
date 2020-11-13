import React from 'react'
import styled from 'styled-components'
import { 
  Input, InputProps, InputContext,
  Heading, HeadingProps, HeadingContext,
} from '../atoms'
import FileButton, { FileButtonProps, FileButtonContext } from '../atoms/FileButton'

type ItemProps = InputProps | FileButtonProps

export interface FormItemProps {
  heading? :HeadingProps
  item?: ItemProps
  errMsg?: string
}

export const FormItemContext = React.createContext<FormItemProps>({})

const FormItem: React.FC<FormItemProps> = (props) => {
  const getItem = () => {
    if (isInput(props.item)) {
      return (
        <InputContext.Provider value={{...props.item}}>
          <Input/>
        </InputContext.Provider>
      )
    } else if (isFileButton(props.item)) {
      return (
        <FileButtonContext.Provider value={{...props.item}}>
          <FileButton/>
        </FileButtonContext.Provider>
      )
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

const isInput = (item: any): item is InputProps =>
  item.name !== undefined

const isFileButton = (item: any): item is FileButtonProps =>
  item.id !== undefined

const Container = styled.div`
  flex-grow: 1;
  margin: 20px 0;
  text-align: center;
`