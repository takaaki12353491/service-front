import React from 'react'
import styled from 'styled-components'
import { Label, Text } from '../atoms'

export interface InputFieldProps {
  label? :string
  errMsg?: string
  className?: string
}

export const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <Container className={props.className}>
      {props.label && <InputLabel text={props.label}/>}
      {props.children}
      {props.errMsg && <ErrorMsg content={props.errMsg}/>}
    </Container>
  )
}
export default InputField

const Container = styled.div`
`

const InputLabel = styled(Label)`
  display: block;
`

const ErrorMsg = styled(Text)`
  margin 0;
  color: red;
`