import React from 'react'
import styled from 'styled-components'
import { Input, Select, Link, Avator } from '../atoms'
import { State } from '../../modules'
import { URL, Name } from '../../consts'

export const Header: React.FC = () => {
  return (
    <Container>
      <HeaderLink href={URL.HOME} text='Service'/>
      <Search>
        <PatternSelect
          name={Name.PATTERN}
          options={[
            { value: 'name', text: 'name' },
            { value: 'tag', text: 'tag' },
          ]}
        />
        <TargetSelect
          name={Name.TARGET}
          options={[
            { value: 'account', text: 'account' },
            { value: 'community', text: 'community' },
            { value: 'project', text: 'project' },
          ]} 
        />
        <SearchBar name={Name.SEARCH} placeholder='search...'/>
      </Search>
      <Auth>
        {
          State.isAuthenticated() ?
          <>
            <UserIcon>test</UserIcon>
          </> :
          <>
            <HeaderLink href={URL.SIGNUP} text='Sign up'/>
            <HeaderLink href={URL.LOGIN} text='Login'/>
          </>
        }
      </Auth>
    </Container>
  )
}
export default Header

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: black;
`

const HeaderLink = styled(Link)`
  margin: 0 10px;
`

const Search = styled.div`
`

const PatternSelect = styled(Select)`
`

const TargetSelect = styled(Select)`
`

const SearchBar = styled(Input)`
`

const Auth = styled.div`
`

const UserIcon = styled(Avator)`
  width: 30px;
  height: 30px;
`