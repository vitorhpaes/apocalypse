import React, { useEffect, useState } from 'react'
import Person from '../@types/Person'
import List from 'src/components/List/List'
import axios from 'axios'
import { Container, Input } from '@mui/material'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'

const useStyles = makeStyles((theme: iTheme) => ({
  searchInput: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    background: theme.palette.primary.light,
  },
}))

const HomePage: React.FC = () => {
  const classes = useStyles()
  const [people, setPeople] = useState<Person[]>([])

  useEffect(() => {
    const fetchPeople = async () => {
      const { data } = await axios.get('http://localhost:3333/people')
      setPeople(data)
    }
    fetchPeople()
  }, [])

  return (
    <Container>
      <Input
        name="search"
        type="search"
        className={classes.searchInput}
        color="primary"
        placeholder={'Search by name'}
      />
      <List people={people} />
    </Container>
  )
}

export default HomePage
