import React from 'react'
import styled from 'styled-components'

export interface ImageProps {
  src: string
  alt?: string
  className?: string
}

export const Image: React.FC<ImageProps> = (props) => {
  return (
    <img {...props}/>
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