import React from 'react'
import Person from '../../@types/Person'

interface ListProps {
  people: Person[]
}

const List: React.FC<ListProps> = ({ people }) => {
  return (
    <ul>
      {people.map((person) => (
        <li>
          <div>#{person.id}</div>
          <div>
            <img src={person.avatar} alt={person.name} />
          </div>
          <div>{person.name}</div>
          <div>survivor: {person.survivor ? 'yes' : 'no'}</div>
        </li>
      ))}
    </ul>
  )
}

export default List
