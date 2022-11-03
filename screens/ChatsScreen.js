import { View, Text, TouchableNativeFeedback } from 'react-native'
import React from 'react'

const ChatsScreen = () => {
  return (
    <View>

      <TouchableNativeFeedback>
        <View className='bg-blue-300 w-[90%] h-[100px]'>
          <Text className='text-red-500'>BUTTON</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default ChatsScreen