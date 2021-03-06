export namespace Storage {
  export const Set = <T extends {}>(key: string, item: T): void => { 
    localStorage.setItem(key, JSON.stringify(item)) 
  } 
  
  export const Get = <T extends {}>(key: string): T | null => { 
    let data: any = localStorage.getItem(key)
    if (!data) return null
    let obj: T = JSON.parse(data)
    return obj 
  }

  export const Remove = (key: string) => {
    localStorage.removeItem(key)
  }

  export namespace Key {
    export const USER = 'user'
    export const JWT = 'jwt'
  }
}
export default Storage