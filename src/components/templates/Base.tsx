import React from 'react'
import { Header, Footer, SideMenu } from '../organisms'
import styled from 'styled-components'

const Base: React.FC = (props) => {
  return (
    <>
      <Header/>
      <Middle>
        <SideMenu/>
        <Main>
          {props.children}
        </Main>
      </Middle>
      <Footer/>
    </>
  )
}
export default Base

const Middle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
`

const Main = styled.div`
`