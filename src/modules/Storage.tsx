export class Storage {
  public static readonly USER = 'user'
  public static readonly JWT_TOKEN = 'jwtToken'

  public static Set = <T extends {}>(key: string, item: T): void => { 
    localStorage.setItem(key, JSON.stringify(item)) 
  } 
  
  public static Get = <T extends {}>(key: string): T | null => { 
    let data: any = localStorage.getItem(key)
    if (!data) return null
    let obj: T = JSON.parse(data)
    return obj 
  } 
}