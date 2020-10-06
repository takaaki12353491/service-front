import React from 'react'
import styled from 'styled-components'
import axios, { AxiosResponse } from 'axios'
import { TwitterLoginButton, GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons";

interface Props {
}

const LoginForm: React.FC<Props> = (props) => {
  interface Callback  {
    ID: number
    Name: string
    AvatorURL: string
  }
  const login = () => {
    axios
      .post('http://localhost:8080/auth/github/auth')
      .then((response: AxiosResponse<Callback>) => {
        
      })
      .catch(
      )
  }
  return(
    <Wrapper>
      <TwitterLoginButton align="center"/>
      <GoogleLoginButton align="center"/>
      <GithubLoginButton align="center"/>
    </Wrapper>
  )
}
export default LoginForm

const Wrapper = styled.div`
  width: 300px;
  margin: 30px auto;
`;