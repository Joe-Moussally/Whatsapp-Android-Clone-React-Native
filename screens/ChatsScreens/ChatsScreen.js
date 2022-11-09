import { Image, View } from 'react-native'
import React from 'react'

//component imports
import ChatCard from '../../components/ChatsComponents/ChatCard'

const ChatsScreen = () => {

  return (
    <View
      className='bg-white flex-1 items-center'
    >

      <ChatCard
        contactName='Joe Moussally'
        // contactImgUrl='../../assets/default_contact_picture.webp'
        lastMessageText='Hello'
        lastMessageTime='6:38 PM'
      />

      <ChatCard
        contactName='Elon Musk'
        // contactImgUrl='../../assets/default_contact_picture.webp'
        lastMessageText='Howdy partner!'
        lastMessageTime='6:01 PM'
      />
    </View>
  )
}

export default ChatsScreen