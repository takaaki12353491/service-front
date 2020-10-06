export const setItem = <T extends {}>(key: string, item: T): void => { 
  localStorage.setItem(key, JSON.stringify(item)) 
} 

export const getItem = <T extends {}>(key: string): T | null => { 
  let data: any = localStorage.getItem(key)
  if (!data) return null
  let obj: T = JSON.parse(data)
  return obj 
} 