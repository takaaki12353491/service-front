import React from 'react'

export interface ImageProps {
  src: string
  alt?: string
}

export const ImageContext = React.createContext<ImageProps>({
  src: ''
})

export const Image: React.FC<{className?: string}> = (props) => {
  const value = React.useContext(ImageContext)
  return(
    <img className={props.className} {...value}/>
  )
}
export default Image