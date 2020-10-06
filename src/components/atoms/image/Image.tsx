import React from 'react'

interface Props {
  src: string
  alt?: string
}

const Image: React.FC<Props> = (props) => {
  return(
    <img src={props.src} alt={props.alt} />
  )
}