import { View, Text } from 'react-native'
import React from 'react'

const MessageBubble = ({
    text
}) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

export default MessageBubble