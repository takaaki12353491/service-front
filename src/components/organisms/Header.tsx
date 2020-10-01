import React from 'react';

interface HeaderProps {
  UserName: string
}

const Header: React.FC<HeaderProps> = (
  props:HeaderProps
): JSX.Element => {
  return(
    <header className="header">

    </header>
  )
}
export default Header