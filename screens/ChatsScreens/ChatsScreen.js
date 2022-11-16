// react/react native imports
import { Image, View } from 'react-native'
import React from 'react'

//navigation imports
import { useNavigation } from '@react-navigation/native'

//component imports
import ChatCard from '../../components/ChatsComponents/ChatCard'

// redux imports
import { useSelector } from 'react-redux'
import { getAllMessages } from '../../redux/slices/messagesSlice'


const ChatsScreen = () => {

  const navigation = useNavigation()

  //get the messages from store
  const chatsArray = useSelector(getAllMessages)

  //function to check if a date is lest that 24 hrs ago -> return boolean
  function isLessThan24HourAgo(date) {
    // 👇️                    hour  min  sec  milliseconds
    const twentyFourHrInMs = 24 * 60 * 60 * 1000;
  
    const twentyFourHoursAgo = Date.now() - twentyFourHrInMs;
  
    return date > twentyFourHoursAgo;
  }


  return (
    <View
      className='bg-white flex-1 items-center'
    >
      {
        chatsArray.map((chat) => {

          //inital values 
          let lastMessageText = null
          let lastMessageDate = null
          let isRead = true
          let unreadCount = 0

          //if there are any messages between the 2 users
          if(chat.messages.length) {
            //get the last text sent
            lastMessageText = chat.messages[0].text
            //get time of the last text sent
            lastMessageDate = new Date(chat.messages[0].createdAt)

            if(isLessThan24HourAgo(lastMessageDate)) {
              lastMessageDate = lastMessageDate.toLocaleTimeString().slice(0,5) // ex: 10:45
            } else {
              lastMessageDate = lastMessageDate.toLocaleDateString() // ex: 15/12/2022
            }
  
            //calculating number of unread messages
            unreadCount = 0
            chat.messages.forEach(message => {
              //if there's a message that user hasn't read
              if(!message.isRead && message.senderId!==1) {
                isRead=false
                unreadCount+=1
              }
            })
          }
          
          return (
            <ChatCard
              key={chat.contactName}
              contactName={chat.contactName}
              lastMessageText={lastMessageText}
              lastMessageTime={lastMessageDate}
              // isRead={isRead}
              messagesNumber={unreadCount}
              onPress={() => {navigation.navigate('ChatScreen',{contactName:chat.contactName,chatId:chat.chatId})}}
            />
          )

        })
      }
{/* 
      <ChatCard
        key={1}
        contactName='Joe Moussally'
        lastMessageText='Good'
        lastMessageTime='10:22 PM'
        onPress={() => {navigation.navigate('ChatScreen',{contactName:'Joe Moussally',chatId:1})}}
      /> */}

    </View>
  )
}

export default ChatsScreen