import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Person from 'src/@types/Person/Person'
import storage from '../storage/index'

interface PeopleProps {
  list: Person[]
}

const initialState: PeopleProps = {
  list: storage.get('apocalypse_people') ?? [],
}

const handleSetList = (state: any, newList: Person[]) => {
  state.list = newList
  storage.setJSON('apocalypse_people', newList)
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Person[]>) =>
      handleSetList(state, action.payload),
    savePerson: (state, action: PayloadAction<Partial<Person>>) => {
      const newList = state.list.map((person) => {
        if (person.id !== action.payload.id) return person
        return {
          ...person,
          ...action.payload,
        }
      })
      handleSetList(state, newList)
    },
    resetList: (state) => {
      state.list = []
      storage.remove('apocalypse_people')
    },
  },
})

export const { setList, savePerson, resetList } = basketSlice.actions

export default basketSlice.reducer
