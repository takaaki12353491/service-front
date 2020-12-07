import React from 'react'
import styled from 'styled-components'

export interface AvatorProps {
  src?: string
  className?: string
}

export const Avator: React.FC<AvatorProps> = (props) => {
  return (
    <Container className={props.className}>
      {props.src? <Image src={props.src}/> : props.children}
    </Container>
  )
}
export default Avator

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: white;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`