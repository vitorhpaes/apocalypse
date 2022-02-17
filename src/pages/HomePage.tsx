import React, { useEffect, useState } from 'react'
import Person, { PersonResponse } from '../@types/Person'
import List from 'src/components/List/List'
import axios from 'axios'
import { Button, Container, Input } from '@mui/material'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'
import Header from 'src/components/Header/Header'
import { FiSearch } from 'react-icons/fi'

const useStyles = makeStyles((theme: iTheme) => ({
  searchInput: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
    background: theme.palette.primary.light,
    borderRadius: 4,
  },
}))

const HomePage: React.FC = () => {
  const classes = useStyles()
  const [people, setPeople] = useState<Person[]>([])

  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await axios.get('http://localhost:3333/people')

      const normalizedPeople: Person[] = data.map((person: PersonResponse) => {
        console.log(person.status)
        const status = {
          id: person.status,
          description:
            person.status === 1
              ? 'good'
              : person.status === 2
              ? 'examining'
              : 'infected',
        }
        return { ...person, status }
      })
      setPeople(normalizedPeople)
    }
    fetchPeople()
  }, [])

  return (
    <Container>
      <Header>
        <>
          <Input
            name="search"
            type="search"
            className={classes.searchInput}
            color="primary"
            placeholder={'Search by name'}
          />
          <Button
            variant={'text'}
            color={'info'}
            size={'small'}
            sx={{ minWidth: 40, minHeight: 30 }}
          >
            <FiSearch />
          </Button>
        </>
      </Header>
      <List people={people} />
    </Container>
  )
}

export default HomePage
