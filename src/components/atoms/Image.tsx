import React from 'react'

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