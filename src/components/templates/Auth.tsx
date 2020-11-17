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
      <AuthForm {...props.form}/>
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

const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  height: 300px;
  padding: 0 100px;
`

const ButtomNavigation = styled(Navigation)`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0 0 0;
`