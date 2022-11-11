import { Image, View } from 'react-native'
import React from 'react'

//component imports
import ChatCard from '../../components/ChatsComponents/ChatCard'
import { useSelector } from 'react-redux'
import { getAllMessages } from '../../redux/slices/messagesSlice'

const ChatsScreen = () => {

  const chatsArray = useSelector(getAllMessages)

  return (
    <View
      className='bg-white flex-1 items-center'
    >
      {
        chatsArray.map((chat) => {
          let lastMessageText = null
          let lastMessageTime = null
          let isRead = true
          let unreadCount = 0

          if(chat.messages.length) {
            lastMessageText = chat.messages[chat.messages.length-1].text
            lastMessageTime = chat.messages[chat.messages.length-1].timeSent
  
            //calculating number of unread messages
            unreadCount = 0
            chat.messages.forEach(message => {
            
              if(!message.isRead && message.senderId!==1) {
                isRead=false
                unreadCount+=1
              }
            })
            
          }
          
          return (
            <ChatCard
              contactName={chat.contactName}
              lastMessageText={lastMessageText}
              lastMessageTime={lastMessageTime}
              isRead={isRead}
              messagesNumber={unreadCount}
            />
          )

        })
      }

      {/* <ChatCard
        contactName='Joe Moussally'
        // contactImgUrl='../../assets/default_contact_picture.webp'
        lastMessageText='Hello'
        lastMessageTime='6:38 PM'
        isRead={false}
        messagesNumber='2'
      />

      <ChatCard
        contactName='Elon Musk'
        // contactImgUrl='../../assets/default_contact_picture.webp'
        lastMessageText='Howdy partner!'
        lastMessageTime='6:01 PM'
      /> */}
    </View>
  )
}

export default ChatsScreen