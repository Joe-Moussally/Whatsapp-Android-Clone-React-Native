import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  //dummy data
  value: [
    {
      chatId:0,
      contactName:'Joe Moussally',
      messages:[
        {text:'Yow!',timeSent:'10:38 PM', isRead:true,senderId:2,sent: true,received: true},
        {text:'Heyy',timeSent:'10:39 PM', isRead:true,senderId:1,sent: true,received: true},
        {text:'How are you?',timeSent:'10:39 PM', isRead:true,senderId:2,sent: true,received: true},
        {text:'Good, and you?',timeSent:'10:40 PM', isRead:true,senderId:1,sent: true,received: true},
        {text:'Doing great :p',timeSent:'10:41 PM', isRead:true,senderId:2,sent: true,received: true},
        {text:'Good to hear :)',timeSent:'10:41 PM', isRead:false,senderId:2,sent: true,received: false}
      ]
    },
    {
      chatId:1,
      contactName:'Elon Musk',
      messages:[
        // {text:'Howdy!',timeSent:'6:38 PM', isRead:true,senderId:3,sent: true,received: true},
        // {text:'Heyy',timeSent:'6:39 PM', isRead:true,senderId:1,sent: true,received: true},
        // {text:'How are you?',timeSent:'6:39 PM', isRead:false,senderId:3,sent: true,received: true},
        // {text:'Good?',timeSent:'6:40 PM', isRead:false,senderId:3,sent: true,received: true}
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
      console.log(payload)
    }
  },
})


export const { updateMessagesArray } = messagesSlice.actions

//selector to get all messages
export const getAllMessages = (state) => state.messages.value

//selector to get messages from a specific chat by chatId
export const getChatById = (state,payload) => {
  console.log(payload)
  let chatIndex = state.messages.value.findIndex((chat) => (chat.chatId === payload.chatId))
  return state.messages.value[chatIndex]
}


export default messagesSlice.reducer