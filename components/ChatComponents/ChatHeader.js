import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'

//icons import
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// component imports
import HeaderButton from '../Header/HeaderButton'

const ChatHeader = () => {

    const navigation = useNavigation()

  return (
    <View className='flex-row bg-[#156b4d] h-[48px] px-1 items-center justify-between'>
      
        {/* Header Left */}
        <View className='flex-row items-center'>
            {/* Back button + chatee image container */}
            <View className='rounded-[40px] w-[65px]'>
                <TouchableNativeFeedback
                    onPress={() => {navigation.pop()}}
                    background={TouchableNativeFeedback.Ripple('lightgray',true)}
                >
                    <View className='flex-row items-center justify-around w-[65px] rounded-full p-1'>
                        <Ionicons name="arrow-back" size={22} color="white" />
                        <Image
                            className='h-[30px] w-[30px] rounded-full'
                            source={require('../../assets/default_contact_picture.webp')}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>

            {/* Contact Name */}
            <Text className='text-white text-[17px] font-semibold mb-1 ml-1'>Elon Musk</Text>
        </View>

        {/* Header Buttons Container */}
        <View className='flex-row'>
            {/* Video Call icon */}
            <HeaderButton
                icon={<Ionicons name="videocam" size={23} color="white" />}
            />

            {/* Voice Call icon */}          
            <HeaderButton
                icon={<Ionicons name="md-call" size={20} color="white" />}
            />
            {/* Menu 3-Dots icon */}
            <HeaderButton
                icon={<MaterialCommunityIcons name="dots-vertical" size={22} color="white"/>}
            />
        </View>
    </View>
  )
}

export default ChatHeader