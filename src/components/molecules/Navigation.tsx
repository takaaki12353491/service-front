import React from 'react'
import styled from 'styled-components'
import { Link, LinkProps } from '../atoms'

export interface NavigationProps {
  items: LinkProps[]
  className?: string
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  return(
    <Container className={props.className}>
      {props.items.map(item => {
        return <Link key={item.href} {...item}/>
      })}
    </Container>
  )
}
export default Navigation

const Container = styled.div`
`