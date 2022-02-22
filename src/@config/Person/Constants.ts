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
