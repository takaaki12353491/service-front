import React from 'react'
import styled from 'styled-components'
import { Heading, HeadingProps } from '../atoms'
import { Navigation, NavigationProps } from '../molecules'
import { Form, FormProps } from '../organisms/Form'

export interface AuthProps {
  heading: HeadingProps
  form: FormProps
  navigation: NavigationProps
}

export const Auth: React.FC<AuthProps> = (props) => {
  return (
    <Container>
      <Heading {...props.heading}/>
      <hr/>
      <Form {...props.form}/>
      <hr/>
      <ButtomNavigation {...props.navigation}/>
    </Container>
      
  ) 
}
export default Auth

const Container = styled.div`
  width: 500px;
  margin: 50px auto 0 auto;
  text-align: center;
`

const ButtomNavigation = styled(Navigation)`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0 0 0;
`