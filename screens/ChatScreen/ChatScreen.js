// react/react native import
import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'

// components
import ChatHeader from '../../components/ChatComponents/ChatHeader'

const ChatScreen = () => {

  return (
    <View className='flex-1'>

      {/* Chat Screen Background */}
      <ImageBackground
        className='flex-1'
        source={require('../../assets/default_background.jpg')}
      >

        {/* Chat Header */}
        <ChatHeader />

      </ImageBackground>
    </View>
  )
}

export default ChatScreen