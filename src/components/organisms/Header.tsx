import React from 'react'
import styled from 'styled-components'
import { State } from '../../modules'
import { URL, Name } from '../../consts'
import {
  Input, InputContext,
  Select, SelectContext,
  Link, LinkContext
} from '../atoms'

const Header: React.FC = () => {
  return (
    <Container>
      <LinkContext.Provider value={{
        href: '/', text: 'Service'
      }}>
        <HomeLink/>
      </LinkContext.Provider>
      <Search>
        <SelectContext.Provider value={{
          name: Name.PATTERN,
          options: [
            { value: 'name', text: 'name' },
            { value: 'tag', text: 'tag' },
          ]
        }}>
          <PatternSelect/>
        </SelectContext.Provider>
        <SelectContext.Provider value={{
          name: Name.TARGET,
          options: [
            { value: 'account', text: 'account' },
            { value: 'community', text: 'community' },
            { value: 'project', text: 'project' },
          ], 
        }}>
          <TargetSelect/>
        </SelectContext.Provider>
        <InputContext.Provider value={{
          name: Name.SEARCH, placeholder: 'search...'
        }}>
          <Input/>
        </InputContext.Provider>
      </Search>
    </Container>
  )
}
export default Header

const Container = styled.header`
  display: flex;
  position: sticky;
  width: 100%;
  height: 60px;
  top: 0;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
`

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`

const Search = styled.div`
`

const PatternSelect = styled(Select)`
`

const TargetSelect = styled(Select)`
`

const SearchBar = styled(Input)`
`