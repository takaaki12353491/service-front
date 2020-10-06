import React from 'react'
import styled from 'styled-components'

interface Props {
  onClick?: () => any;
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;
  activeStyle?: object;
  className?: string;
  icon?: string | React.Component | Function;
  iconFormat?: (iconName: string) => string;
  iconSize?: string;
  iconColor?: string;
  preventActiveStyles?: Boolean;
  style?: object;
  align?: "left" | "center" | "right";
  text?: string;
}

const Button: React.FC<Props> = (props) => {
  return(
    <Wrapper>
      props.text
    </Wrapper>
  )
}
export default Button

const Wrapper = styled.button`
  text-align: center;
  border: 1px;
`;