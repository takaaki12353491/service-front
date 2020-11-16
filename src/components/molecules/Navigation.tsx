import React from 'react'
import styled from 'styled-components'
import { Link, LinkProps } from '../atoms'

export interface NavigationProps {
  items: LinkProps[]
  className?: string
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const list = []
  for (const item of props.items) {
    list.push(
      <Link key={item.href} {...item}/>
    )
  }
  return(
    <Container className={props.className}>
      {list}
    </Container>
  )
}
export default Navigation

const Container = styled.div`
`