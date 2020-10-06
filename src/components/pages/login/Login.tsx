import React from 'react'
import styled from 'styled-components'
import Login from '../../templates/login/Login'

interface Props {
}

const LoginPage: React.FC<Props> = (props) => {
  return(
    <Wrapper>
      <Login/>
    </Wrapper>
  )
}
export default LoginPage

const Wrapper = styled.div`
  text-align: center;
`;