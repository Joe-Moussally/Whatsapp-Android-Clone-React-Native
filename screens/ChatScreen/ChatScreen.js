// react/react native import
import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'

//package imports
import { GifterChat } from 'react-native-gifted-chat'

// component imports
import ChatHeader from '../../components/ChatComponents/ChatHeader'
import MessageInput from '../../components/ChatComponents/MessageInput'

// redux imports
import { useSelector } from 'react-redux'
import { getAllMessages, getChatById } from '../../redux/slices/messagesSlice'


const ChatScreen = ({route}) => {

  const routeParams = route.params

  const messages = useSelector((state) => getChatById(state,{chatId:route.params.chatId}))
  console.log(messages)

  return (
    <View className='flex-1'>

      {/* Chat Header */}
      <ChatHeader
        contactName={routeParams.contactName}
      />

      {/* Chat Screen Background */}
      <ImageBackground
        className='flex-1 absolute h-[100%] w-[100%] -z-10'
        source={require('../../assets/default_background.jpg')}
      />

      {/* Messages container */}
      <View className='flex-1'>
      </View>

      <MessageInput />

    </View>
  )
}

export default ChatScreen