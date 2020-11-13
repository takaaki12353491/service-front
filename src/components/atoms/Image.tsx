import React from 'react'

export interface ImageProps {
  src: string
  alt?: string
  className?: string
}

export const ImageContext = React.createContext<ImageProps>({
  src: ''
})

export const Image: React.FC = () => {
  const value = React.useContext(ImageContext)
  return(
    <img {...value}/>
  )
}
export default Image