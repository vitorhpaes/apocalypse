import React from 'react'
import Person from 'src/@types/Person'
import { Avatar, Grid, Paper, Theme } from '@mui/material'
import { makeStyles } from '@material-ui/styles'

interface PersonCardProps {
  person: Person
}

const useStyles = makeStyles((theme: Theme) => ({
  personCard: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.primary.dark} 120%)`,
  },
}))

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const classes = useStyles()
  return (
    <Grid item md={4} sm={6}>
      <Paper elevation={1} className={classes.personCard}>
        <div>#{person.id}</div>
        <div>
          <Avatar alt={person.name} src={person.avatar} />
        </div>
        <div>{person.name}</div>
        <div>survivor: {person.survivor ? 'yes' : 'no'}</div>
      </Paper>
    </Grid>
  )
}

export default PersonCard
