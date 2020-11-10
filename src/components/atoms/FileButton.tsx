import React from 'react'

export interface FileButtonProps {
  id: string
}

const FileButton: React.FC<FileButtonProps> = (props) => {
  const [ image, setImage ] = React.useState('')
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files === null || files.length === 0) return 
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result
      typeof result === 'string' && setImage(result)
    }
    reader.readAsDataURL(files[0])
  }
  return (
    <div>
      
    </div>
  )
}
export default FileButton