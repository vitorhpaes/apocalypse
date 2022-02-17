export default interface Person {
  id: number
  name: string
  avatar: string
  status: {
    id: number
    description: 'good' | 'examining' | 'infected'
  }
  age: number
}

export interface PersonResponse {
  id: number
  name: string
  avatar: string
  status: 1 | 2 | 3
  age: number
}
