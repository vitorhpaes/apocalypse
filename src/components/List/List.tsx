import React, { memo } from 'react'
import { Grid } from '@mui/material'
import PersonCard from '../PersonCard/PersonCard'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'
import { handleSelect } from 'src/state'

const useStyles = makeStyles((theme: iTheme) => ({
  list: {
    paddingBottom: theme.spacing(2),
    justifyContent: 'center',
  },
}))

const List: React.FC = () => {
  const classes = useStyles()
  const people = handleSelect((state) => state.people.list)

  return (
    <Grid container spacing={3} className={classes.list}>
      {people.map((person) => (
        <PersonCard key={person.name} person={person} />
      ))}
    </Grid>
  )
}

export default memo(List)
