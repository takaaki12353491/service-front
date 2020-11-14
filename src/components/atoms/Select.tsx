import React from 'react'

export interface OptionProps {
  value: string
  text: string
}

export interface SelectProps {
  name: string
  options: OptionProps[]
  className?: string
}

export const Select: React.FC<SelectProps> = (props) => {
  const list = []
  for (const option of props.options) {
    list.push(
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    )
  }
  return (
    <select {...props}>
      {list}
    </select>
  )
}
export default Select