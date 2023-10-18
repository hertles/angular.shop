export interface User {
  id: number
  login: string
  password: string
  name: string
  homeTown?: string
  postIndex?: number
  preferences: Set<number>
}
