import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  //dummy data
  value: [
    {
      chatId:0,
      contactName:'Elon Musk',
      messages:[
        {_id: Math.random()*1000,text: 'Good, just having fun firing some executives',createdAt: '2022-11-12T10:47:56.104Z',user: {_id: 2,}},
        {_id: Math.random()*1000,text: 'Doing great! you?',createdAt: '2022-11-12T10:45:56.104Z',user: {_id: 1,}},
        {_id: Math.random()*1000,text: 'How are you?',createdAt: '2022-11-12T10:43:59.104Z',user: {_id: 2,}},
        {_id: Math.random()*1000,text: 'Hi Elon',createdAt: '2022-11-12T10:43:56.104Z',user: {_id: 1,}},
        {_id: Math.random()*1000,text: 'Hello Joe',createdAt: '2022-11-12T10:42:56.104Z',user: {_id: 2,}},
      ]
    },
    {
      chatId:1,
      contactName:'Joe Moussally',
      messages:[]
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
      //find the chat array index
      let chatIndex = state.value.findIndex(chat => chat.chatId === payload.payload.chatId)

      //add the lastest message to the array
      state.value[chatIndex].messages.unshift(payload.payload.message)

      state.value = state.value.sort((a,b) => {
        if(!a.messages[0].createdAt || !b.messages[0].createdAt) return
        return new Date(b.messages[0].createdAt) - new Date(a.messages[0].createdAt)
      })
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