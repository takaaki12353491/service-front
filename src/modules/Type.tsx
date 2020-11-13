export namespace Type {
  export type User = {
    ID: string
    Name: string
    Email: string
  }

  export type Community = {
    ID: string
	  Owner: User
	  Name: string
	  Description?: string
  }
}
export default Type