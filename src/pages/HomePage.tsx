import React, { useEffect, useState } from 'react'
import Person from '../@types/Person'
import List from 'src/components/List/List'
import axios from 'axios'

const HomePage: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([])

  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await axios.get('http://localhost:3333/people')
      setPeople(data)
    }
    fetchPeople()
  }, [])

  return <List people={people} />
}

export default HomePage
