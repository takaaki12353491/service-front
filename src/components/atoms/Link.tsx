import React from 'react'

export interface LinkProps {
  href: string
  text: string
}

export const LinkContext = React.createContext<LinkProps>({
  href: '', text: ''
})

export const Link: React.FC<{className?: string}> = (props) => {
  const value = React.useContext(LinkContext)
  return (
    <a className={props.className} href={value.href}>
      {value.text}
    </a>
  )
}
export default Link