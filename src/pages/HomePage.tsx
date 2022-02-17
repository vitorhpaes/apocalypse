import React, { useCallback, useEffect } from 'react'
import Person from '../@types/Person'
import List from 'src/components/List/List'
import { Button, Container, Input } from '@mui/material'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'
import Header from 'src/components/Header/Header'
import { handleDispatch, handleSelect } from 'src/state'
import { setList } from 'src/state/slices/people'
import { fetchPeople } from 'src/services/people/query'
import { FiSearch } from 'react-icons/fi'
import { IoReloadSharp } from 'react-icons/io5'

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
  const peopleList = handleSelect((state) => state.people.list)
  const dispatch = handleDispatch()

  const saveList = useCallback(
    (newList: Person[]) => dispatch(setList(newList)),
    []
  )

  const handleFetch = async () => {
    const personList = await fetchPeople()
    saveList(personList)
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <Container>
      <Header>
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
        <Button
          variant={'text'}
          color={'warning'}
          size={'small'}
          sx={{ minWidth: 40, minHeight: 30, marginLeft: 'auto' }}
        >
          <IoReloadSharp />
        </Button>
      </Header>
      <List people={peopleList} />
    </Container>
  )
}

export default HomePage
