import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Person from '../@types/Person'
import List from 'src/components/List/List'
import { Button, Container, Input } from '@mui/material'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'
import Header from 'src/components/Header/Header'
import { handleDispatch, handleSelect } from 'src/state'
import { fetchPeople } from 'src/services/people/query'
import { FiSearch } from 'react-icons/fi'
import { IoReloadSharp } from 'react-icons/io5'
import { resetList, setList } from 'src/state/slices/people'

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
  const peopleState = handleSelect((state) => state.people.list)
  const dispatch = handleDispatch()
  const [filterQuery, setFilterQuery] = useState<string>('')

  const handleSaveList = useCallback(
    (newList: Person[]) => dispatch(setList(newList)),
    []
  )
  const handleResetList = useCallback(() => dispatch(resetList()), [])

  const handleFetch = async () => {
    const personList = await fetchPeople()
    handleSaveList(personList)
  }

  const showingList = useMemo(() => {
    return peopleState.filter((person) => {
      return (
        String(person.id) === filterQuery ||
        person.name.includes(filterQuery) ||
        String(person.status) === filterQuery
      )
    })
  }, [peopleState, filterQuery])

  useEffect(() => {
    if (peopleState.length) return
    handleFetch()
  }, [peopleState])

  return (
    <Container>
      <Header>
        <Input
          name="search"
          type="search"
          className={classes.searchInput}
          color="primary"
          placeholder={'Search by name'}
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
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
          onClick={handleResetList}
        >
          <IoReloadSharp />
        </Button>
      </Header>
      <List people={showingList} />
    </Container>
  )
}

export default HomePage
