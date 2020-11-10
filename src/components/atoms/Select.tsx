import React from 'react'
import styled from 'styled-components'

export interface OptionProps {
  value: string
  text: string
}

export interface SelectProps {
  name: string
  options: OptionProps[]
}

const Select: React.FC<SelectProps> = (props) => {
  const list = []
  for (const option of props.options) {
    list.push(
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    )
  }
  return (
    <select>
      {list}
    </select>
  )
}
export default Select