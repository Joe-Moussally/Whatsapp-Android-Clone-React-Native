import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  //dummy data
  value: [
    {
      chatId:0,
      contactName:'Joe Moussally',
      messages:[]
    },
    {
      chatId:1,
      contactName:'Elon Musk',
      messages:[
        {_id: Math.random()*1000,text: 'Good, just having fun firing some executives',createdAt: '2022-11-12T10:47:56.104Z',user: {_id: 2,}},
        {_id: Math.random()*1000,text: 'Doing great! you?',createdAt: '2022-11-12T10:45:56.104Z',user: {_id: 1,}},
        {_id: Math.random()*1000,text: 'How are you?',createdAt: '2022-11-12T10:43:59.104Z',user: {_id: 2,}},
        {_id: Math.random()*1000,text: 'Hi Elon',createdAt: '2022-11-12T10:43:56.104Z',user: {_id: 1,}},
        {_id: Math.random()*1000,text: 'Hello Joe',createdAt: '2022-11-12T10:42:56.104Z',user: {_id: 2,}},
      ]
    }
  ],
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    updateMessagesArray: (state) => {
      
    },
    addMessageToChat: (state,payload) => {
      console.log(payload.payload.message)
      let chatIndex = state.value.findIndex(chat => chat.chatId === payload.payload.chatId)
      state.value[chatIndex].messages.unshift(payload.payload.message)
    }
  },
})


export const { updateMessagesArray, addMessageToChat } = messagesSlice.actions

//selector to get all messages
export const getAllMessages = (state) => state.messages.value

//selector to get messages from a specific chat by chatId
export const getChatById = (state,payload) => {
  let chatIndex = state.messages.value.findIndex((chat) => (chat.chatId === payload.chatId))
  return state.messages.value[chatIndex]
}


export default messagesSlice.reducer