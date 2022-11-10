import { configureStore } from '@reduxjs/toolkit'

// reducer imports
import messagesReducer from './slices/messagesSlice'

export const store = configureStore({
  reducer: {
    messages: messagesReducer
  },
})