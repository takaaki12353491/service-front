import React from 'react'
import styled from 'styled-components'
import { Typography, Link } from '@material-ui/core'
import LoginForm from '../../organisms/login-form/LoginForm'

interface Props {
}

const Login: React.FC<Props> = (props) => {
  return(
    <Wrapper>
      <Typography variant="h3">Login</Typography>
      <hr/>
      <LoginForm/>
      <Link href="/">Home</Link>
    </Wrapper>
  )
}
export default Login

const Wrapper = styled.div`
  width: 500px;
  margin: 100px auto 0 auto;
  text-align: center;
`;