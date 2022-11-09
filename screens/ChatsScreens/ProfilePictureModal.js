import { View, Text, Image } from 'react-native'
import React from 'react'

const ProfilePictureModal = () => {
  return (
    <View className='flex-1 items-center bg-transparent'>
      <Image
            source={require('../../assets/default_contact_picture.webp')}
            className='h-[200px] aspect-square top-[10%]'
      />
    </View>
  )
}

export default ProfilePictureModal