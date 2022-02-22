import { normalizePeople, normalizePerson } from './normalizer'
import axios from 'axios'
import Person, { StatusResponse } from 'src/@config/Person/Person'

export const findPerson = async (personId: number | string) => {
  const { data } = await axios.get(`http://localhost:3333/people/${personId}`)
  return normalizePerson(data)
}

export const fetchPeople = async (filter?: string, status?: StatusResponse) => {
  const { data } = await axios.get('http://localhost:3333/people', {
    params: {
      name_like: filter,
      status: !!status && status > 0 ? status : null,
    },
  })
  return normalizePeople(data)
}

export const savePerson = async (person: Partial<Person>) => {
  const { data } = await axios.patch(
    `http://localhost:3333/people/${person.id}`,
    {
      person,
    }
  )
  return normalizePerson(data)
}
