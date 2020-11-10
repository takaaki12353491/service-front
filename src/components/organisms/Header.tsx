import React from 'react'
import styled, { StyledFunction } from 'styled-components'
import { State } from '../../modules/State'
import URL from '../../consts/URL'
import Name from '../../consts/Name'
import Input, { InputProps } from '../atoms/Input'
import Select, { SelectProps } from '../atoms/Select'
import Link, { LinkProps } from '../atoms/Link'

const Header = () => {
  const HomeLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:hover: {
      color: gray;
    }
  `
  const PatternSelect: SelectProps = {
    name: Name.PATTERN,
    options: [
      { value: 'name', text: 'name' },
      { value: 'tag', text: 'tag' },
    ],
  }
  const TargetSelect: SelectProps = {
    name: Name.TARGET,
    options: [
      { value: 'account', text: 'account' },
      { value: 'community', text: 'community' },
      { value: 'project', text: 'project' },
    ]
  }
  const SearchInput: InputProps = {
    name: Name.SEARCH
  }

  const Container = styled.header`
    display: flex;
    position: sticky;
    width: 100%;
    height: 60px;
    top: 0;
    align-items: center;
    justify-content: space-evenly;
    background-color: #000000;
  `

  const Search = styled.div`
  `
  return (
    <Container>
      <HomeLink href='/' text='Service'/>
      <Search>
        <Select {...PatternSelect}/>
        <Select {...TargetSelect}/>
        <Input {...SearchInput} />
      </Search>
    </Container>
  )
}
export default Header
