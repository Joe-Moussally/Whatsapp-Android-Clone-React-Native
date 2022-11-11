import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  //dummy data
  value: [
    {
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
      contactName:'Elon Musk',
      messages:[
        {text:'Howdy!',timeSent:'6:38 PM', isRead:true,senderId:3,sent: true,received: true},
        {text:'Heyy',timeSent:'6:39 PM', isRead:true,senderId:1,sent: true,received: true},
        {text:'How are you?',timeSent:'6:39 PM', isRead:false,senderId:3,sent: true,received: true},
        {text:'Good?',timeSent:'6:40 PM', isRead:false,senderId:3,sent: true,received: true}
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
  },
})

// Action creators are generated for each case reducer function
export const { updateMessagesArray } = messagesSlice.actions

export const getAllMessages = (state) => state.messages.value

export default messagesSlice.reducer