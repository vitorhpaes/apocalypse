export default interface Person {
  id: number
  name: string
  avatar: string
  age: number
  status: PersonStatus
}
export interface PersonStatus {
  id: StatusResponse
  description: 'good' | 'examining' | 'infected'
}

export interface PeopleResponse extends Array<PersonResponse> {}

type StatusResponse = 1 | 2 | 3
export interface PersonResponse {
  id: number
  name: string
  avatar: string
  status: StatusResponse
  age: number
}
