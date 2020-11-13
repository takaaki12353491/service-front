import React from 'react'

export interface OptionProps {
  value: string
  text: string
}

export interface SelectProps {
  name: string
  options: OptionProps[]
}

export const SelectContext = React.createContext<SelectProps>({
  name: '', options: [],
})

export const Select: React.FC<{className?: string}> = (props) => {
  const value = React.useContext(SelectContext)
  const list = []
  for (const option of value.options) {
    list.push(
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    )
  }
  return (
    <select className={props.className}>
      {list}
    </select>
  )
}
export default Select