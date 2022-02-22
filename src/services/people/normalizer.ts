import Person, {
  PersonResponse,
  StatusResponse,
} from 'src/@config/Person/Person'

const normalizeStatus = (statusIndex: StatusResponse) => ({
  id: statusIndex,
  description:
    statusIndex === 1
      ? 'good'
      : statusIndex === 2
      ? 'examining'
      : statusIndex === 3
      ? 'infected'
      : statusIndex === 4
      ? 'dead'
      : 'dead',
})

export const normalizePeople = (data: PersonResponse[]): Person[] => {
  const normalizedPeople = data.map(normalizePerson)

  const typedPeople: Person[] = JSON.parse(JSON.stringify(normalizedPeople))
  return typedPeople
}

export const normalizePerson = (person: PersonResponse) => ({
  ...person,
  status: normalizeStatus(person.status),
})
