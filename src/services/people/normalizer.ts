import Person, { PersonResponse } from 'src/@types/Person/Person'

const normalizeStatus = (statusIndex: 1 | 2 | 3) => ({
  id: statusIndex,
  description:
    statusIndex === 1 ? 'good' : statusIndex === 2 ? 'examining' : 'infected',
})

export const normalizePeopleResponse = (data: PersonResponse[]): Person[] => {
  const normalizedPeople = data.map((person: PersonResponse) => ({
    ...person,
    status: normalizeStatus(person.status),
  }))

  const typedPeople: Person[] = JSON.parse(JSON.stringify(normalizedPeople))
  return typedPeople
}
