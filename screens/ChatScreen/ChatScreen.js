// react/react native import
import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'

// components
import ChatHeader from '../../components/ChatComponents/ChatHeader'
import MessageInput from '../../components/ChatComponents/MessageInput'

const ChatScreen = () => {

  return (
    <View className='flex-1'>

      {/* Chat Header */}
      <ChatHeader />

      {/* Chat Screen Background */}
      <ImageBackground
        className='flex-1 absolute h-[100%] w-[100%] -z-10'
        source={require('../../assets/default_background.jpg')}
      />

      <MessageInput />

    </View>
  )
}

export default ChatScreen