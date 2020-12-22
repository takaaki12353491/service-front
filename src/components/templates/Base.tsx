import React from 'react'
import { Header, Footer, SideMenu } from '../organisms'
import styled from 'styled-components'

export const Base: React.FC = (props) => {
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
  position: relative;
  height: 100%;
  margin: 20px;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 250px;
`