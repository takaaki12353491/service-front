import React from 'react'
import styled from 'styled-components'
import Heading from '../atoms/Heading'
import Form from '../organisms/Form'
import Navigation from '../molecules/Navigation'

export const Auth: React.FC = () => {
  return (
    <Container>
      <Heading/>
      <hr/>
      <Form/>
      <Navigation/>
    </Container>
  ) 
}
export default Auth

const Container = styled.div`
  width: 500px;
  margin: 50px auto 0 auto;
  text-align: center;
`