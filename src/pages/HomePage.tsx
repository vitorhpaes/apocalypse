import React, { useCallback, useEffect, useState } from 'react'
import Person, { StatusResponse } from '../@config/Person/Person'
import List from 'src/components/List/List'
import { Container, Input } from '@mui/material'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'
import Header from 'src/components/Header/Header'
import { handleDispatch } from 'src/state'
import { fetchPeople } from 'src/services/people/query'
import { setList } from 'src/state/slices/people'
import { useTranslator } from '@eo-locale/react'
import PersonStatusFilter from 'src/components/PersonStatusFilter/PersonStatusFilter'
import Loader from 'src/components/Loader/Loader'

const useStyles = makeStyles((theme: iTheme) => ({
  searchInput: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(3),
    background: theme.palette.primary.light,
    borderRadius: 4,
  },
  homePageBody: {
    position: 'relative',
    height: '100%',
  },
}))

const HomePage: React.FC = () => {
  const classes = useStyles()
  const dispatch = handleDispatch()
  const [isLoading, setIsLoading] = useState<boolean>()
  const [filterQuery, setFilterQuery] = useState<string | undefined>()
  const [filterStatus, setFilterStatus] = useState<StatusResponse | undefined>()
  const { translate } = useTranslator()

  const handleSaveList = useCallback(
    (newList: Person[]) => dispatch(setList(newList)),
    []
  )

  const handleFetch = async () => {
    setIsLoading(true)
    const personList = await fetchPeople(filterQuery, filterStatus)
    setIsLoading(false)
    handleSaveList(personList)
  }

  useEffect(() => {
    handleFetch()
  }, [filterQuery, filterStatus])

  return (
    <Container className={classes.homePageBody}>
      <Header>
        <Input
          name="search"
          type="search"
          className={classes.searchInput}
          color="primary"
          placeholder={translate('search.inputPlaceHolder')}
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
        <PersonStatusFilter
          setValue={setFilterStatus}
          currentValue={filterStatus}
        />
      </Header>
      <div className={classes.homePageBody}>
        {!isLoading ? <List /> : <Loader />}
      </div>
    </Container>
  )
}

export default HomePage
