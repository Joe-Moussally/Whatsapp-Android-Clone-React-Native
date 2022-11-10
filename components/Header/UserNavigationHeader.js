import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import HeaderButton from './HeaderButton';

import { View, Text } from 'react-native';
import React from 'react';

const UserNavigationHeader = () => {
  return (
    <View className='flex-row justify-between bg-[#156b4d] py-1 px-1 items-center'>

        {/* Header Title */}
        <Text className='text-white text-[21px] font-bold px-2'>WhatsApp</Text>

        {/* Right header container */}
        <View className='flex-row'>

          {/* Search icon */}
          <HeaderButton
            icon={<Ionicons name="search" size={24} color="white" />}
          />

          {/* Header Menu icon */}          
          <HeaderButton
            icon={<MaterialCommunityIcons name="dots-vertical" size={24} color="white"/>}
          />
          
          
        </View>
    </View>
  )
}


export default UserNavigationHeader