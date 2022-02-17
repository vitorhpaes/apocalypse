import React, { memo } from 'react'
import { Grid } from '@mui/material'
import Person from '../../@types/Person/Person'
import PersonCard from '../PersonCard/PersonCard'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'

interface ListProps {
  people: Person[]
}

const useStyles = makeStyles((theme: iTheme) => ({
  list: {
    paddingBottom: theme.spacing(2),
    justifyContent: 'center',
  },
}))

const List: React.FC<ListProps> = ({ people }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={3} className={classes.list}>
      {people.map((person) => (
        <PersonCard key={person.name} person={person} />
      ))}
    </Grid>
  )
}

export default memo(List)
