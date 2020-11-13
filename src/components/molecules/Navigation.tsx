import React from 'react'
import styled from 'styled-components'
import { Link, LinkProps, LinkContext } from '../atoms'

export interface NavigationProps {
  items?: LinkProps[]
}

export const NavigationContext = React.createContext<NavigationProps>({})

export const Navigation: React.FC = () => {
  const value = React.useContext(NavigationContext)
  const list = []
  const items = value.items ? value.items : [] 
  for (const item of items) {
    list.push(
      <LinkContext.Provider value={{...item}}>
        <Link/>
      </LinkContext.Provider>
    )
  }
  return(
    <Container>
      {list}
    </Container>
  )
}
export default Navigation

const Container = styled.div`
`