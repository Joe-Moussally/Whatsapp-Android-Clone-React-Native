import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    updateMessagesArray: (state) => {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateMessagesArray } = messagesSlice.actions

export default messagesSlice.reducer