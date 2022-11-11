import { View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({
  icon,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
        <View className='rounded-full h-[27] w-[27] items-center justify-center m-2'>
            {/* Button icon */}
            {icon?icon:null}
        </View>
    </TouchableOpacity>
  )
}

export default Button