import { View, TouchableOpacity } from 'react-native'
import React from 'react'

// icon imports
import { Ionicons } from '@expo/vector-icons';

const SendButton = ({
  onSend=() => {}
}) => {
  return (
    <TouchableOpacity onPress={onSend}>
        <View
        className='bg-[#25a868] h-[45px] w-[45px] rounded-full items-center justify-center shadow-md shadow-black'
        >
            <Ionicons name="send" size={20} color="white" />
        </View>
     </TouchableOpacity>
  )
}

export default SendButton