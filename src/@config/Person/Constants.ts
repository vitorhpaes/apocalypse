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
export const PERSON_STATUS_DEAD: PersonStatus = {
  id: 4,
  description: 'dead',
}

export const ALL_POSSIBLE_STATUS = [
  PERSON_STATUS_GOOD,
  PERSON_STATUS_EXAMINING,
  PERSON_STATUS_INFECTED,
  PERSON_STATUS_DEAD,
]

export interface PersonStatusClasses {
  [key: number]: 'default' | 'success' | 'warning' | 'error' | 'secondary'
}
export const PERSON_STATUS_CLASSES: PersonStatusClasses = [
  'default', // this status not exists
  'success',
  'warning',
  'error',
  'secondary',
]

export const isGood = (status: PersonStatus) => status.id === 1
export const isExamining = (status: PersonStatus) => status.id === 2
export const isInfected = (status: PersonStatus) => status.id === 3
export const isDead = (status: PersonStatus) => status.id === 4
