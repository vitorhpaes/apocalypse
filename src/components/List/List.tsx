import React from 'react'
import { Grid } from '@mui/material'
import Person from '../../@types/Person'
import PersonCard from '../PersonCard/PersonCard'

interface ListProps {
  people: Person[]
}

const List: React.FC<ListProps> = ({ people }) => {
  return (
    <Grid container spacing={3}>
      {people.map((person) => (
        <PersonCard key={person.name} person={person} />
      ))}
    </Grid>
  )
}

export default List
