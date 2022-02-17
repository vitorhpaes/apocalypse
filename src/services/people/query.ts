import { normalizePeopleResponse } from './normalizer'
import axios from 'axios'

export const fetchPeople = async () => {
  const { data } = await axios.get('http://localhost:3333/people')
  return normalizePeopleResponse(data)
}
