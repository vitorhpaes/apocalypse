import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Person from 'src/@config/Person/Person'
import storage from '../storage/index'

interface PeopleProps {
  list: Person[]
}

const initialState: PeopleProps = {
  list: storage.get('apocalypse_people') ?? [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Person[]>) => {
      state.list = action.payload
    },
    savePerson: (state, action: PayloadAction<Partial<Person>>) => {
      state.list = state.list.map((person) => {
        if (action.payload.id !== person.id) return person
        return {
          ...person,
          ...action.payload,
        }
      })
    },
  },
})

export const { setList, savePerson } = basketSlice.actions

export default basketSlice.reducer
