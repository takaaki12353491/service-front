import React from 'react'
import styled from 'styled-components'
import { Link } from '../atoms'

export const SideMenu: React.FC = () => {
  return (
    <Container>
      <Link text='トップ' href=''/>
      <Link text='マイページ' href=''/>
      <Link text='参加コミュニティ' href=''/>
      <Link text='参加プロジェクト' href=''/>
    </Container>
  )
}
export default SideMenu

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 500px;
  background: black;
`