import React from 'react'

export interface LinkProps {
  href: string
  text: string
  className?: string
}

export const LinkContext = React.createContext<LinkProps>({
  href: '', text: ''
})

export const Link: React.FC = () => {
  const value = React.useContext(LinkContext)
  return (
    <a className={value.className} href={value.href}>
      {value.text}
    </a>
  )
}
export default Link