export interface UserModel {
  id: number
  login: string
  password: string
  name: string
  homeTown?: string
  postIndex?: number
  preferences: Set<number>
}
