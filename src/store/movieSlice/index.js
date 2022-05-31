import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid/non-secure'
import DATA from './data.json'

const initialState = {
  data: DATA
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    createNew: (state, action) => {
      state.data.push({ ...action.payload, id: nanoid() })
    },
    removeById: (state, action) => {
      state.data = state.data.filter(a => a.id !== action.payload)
    }
  }
})

export const { createNew, removeById } = movieSlice.actions

export const movieReducer = movieSlice.reducer
