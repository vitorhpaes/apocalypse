import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Person from 'src/@types/Person'

interface PeopleProps {
  list: Person[]
}

const initialState: PeopleProps = {
  list: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Person[]>) => {
      state.list = action.payload
    },
  },
})

export const { setList } = basketSlice.actions

export default basketSlice.reducer
