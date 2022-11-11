import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'

//icons import
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChatHeader = () => {

    const navigation = useNavigation()

  return (
    <View className='bg-[#156b4d] h-[50px] px-2'>
      
        {/* Back button + chatee image container */}
        <TouchableNativeFeedback
            onPress={() => {navigation.pop()}}
            background={TouchableNativeFeedback.Ripple('#fff',true)}
        >
        <View className='flex-row items-center justify-between border-2 w-[65px] rounded-full p-1'>
            <Ionicons name="arrow-back" size={22} color="white" />
            <Image
                className='h-[30px] w-[30px] rounded-full'
                source={require('../../assets/default_contact_picture.webp')}
            />
        </View> 
        </TouchableNativeFeedback>

    </View>
  )
}

export default ChatHeader