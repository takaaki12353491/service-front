import React from 'react'
import styled from 'styled-components'
import { axios } from '../../../modules/axios'
import { AxiosResponse } from 'axios'
import { TwitterLoginButton, GoogleLoginButton, GithubLoginButton } from "react-social-login-buttons"
import { setItem } from '../../../function/storage'
import { userKey } from '../../../const/key'

interface Props {
}

const LoginForm: React.FC<Props> = (props) => {
  interface Callback  {
    ID: number
    Name: string
    AvatorURL: string
  }
  const login = async (service: string) => {
    await axios
      .get(`/oauth?service=${service}`,{
      })
      .then((res: AxiosResponse<Callback>) => {
        setItem(userKey, res.data)
      })
      .catch(() => {
        console.log("can't get user")
      })
  }
  return(
    <Wrapper>
      <TwitterLoginButton align="center"/>
      <GoogleLoginButton align="center"/>
      <GithubLoginButton onClick={() => login("github")} align="center"/>
    </Wrapper>
  )
}
export default LoginForm

const Wrapper = styled.div`
  width: 300px;
  margin: 30px auto;
`;