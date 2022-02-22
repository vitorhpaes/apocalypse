interface PersonAddress {
  zipCode: string
  street: string
  city: string
  state: string
  country: string
}
export default interface Person {
  id: number
  name: string
  description: string
  avatar: string
  status: PersonStatus
  age: number
  address: PersonAddress
  totalKills: number
  infectionDate?: Date
  deathDate?: Date
}
export interface PersonStatus {
  id: StatusResponse
  description: 'good' | 'examining' | 'infected' | 'dead'
}

export interface PeopleResponse extends Array<PersonResponse> {}

export type StatusResponse = 1 | 2 | 3 | 4
export interface PersonResponse {
  id: number
  name: string
  description: string
  avatar: string
  status: StatusResponse
  age: number
  address: PersonAddress
  totalKills: number
  infectionDate?: Date
  deathDate?: Date
}
