import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Button from '../Button';

import { View, Text, TouchableNativeFeedback } from 'react-native';
import React from 'react';

const UserNavigationHeader = () => {
  return (
    <View className='flex-row justify-between bg-[#156b4d] p-3 items-center'>

        {/* Header Title */}
        <Text className='text-white text-[21px] font-bold '>WhatsApp</Text>

        {/* Right header container */}
        <View className='flex-row'>

          {/* Search icon */}
          <Button
            icon={<Ionicons name="search" size={24} color="white" />}
          />

          {/* Header Menu icon */}          
          <Button
            icon={<MaterialCommunityIcons name="dots-vertical" size={24} color="white"/>}
          />
          
          
        </View>
    </View>
  )
}


export default UserNavigationHeader