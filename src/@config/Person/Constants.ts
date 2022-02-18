import { PersonStatus } from './Person'

export const PERSON_STATUS_GOOD: PersonStatus = {
  id: 1,
  description: 'good',
}
export const PERSON_STATUS_EXAMINING: PersonStatus = {
  id: 2,
  description: 'examining',
}
export const PERSON_STATUS_INFECTED: PersonStatus = {
  id: 3,
  description: 'infected',
}

export const isGood = (status: PersonStatus) => status.id === 1
export const isExamining = (status: PersonStatus) => status.id === 2
export const isInfected = (status: PersonStatus) => status.id === 3
