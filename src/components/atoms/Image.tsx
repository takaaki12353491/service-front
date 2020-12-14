import React from 'react'
import styled from 'styled-components'

export interface ImageProps {
  src?: string
  className?: string
}

export const Image: React.FC<ImageProps> = (props) => {
  return (
    <Container className={props.className} src={props.src}>
    </Container>
  )
}
export default Image

export const HeaderImage = styled(Image)`
  width: 600px;
  height: 200px;
`

export const IconImage = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

const Container = styled.div<{
  src?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({src}) => src ? `url(${src})` : 'gray'};
  background-size: cover;
`