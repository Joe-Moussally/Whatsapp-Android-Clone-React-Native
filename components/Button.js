import { View, TouchableNativeFeedback } from 'react-native'
import React from 'react'

const Button = ({icon,text}) => {
  return (
    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#fff',true)}>
        <View className='rounded-full h-[27] w-[27] items-center justify-center m-2'>
            {/* Button icon */}
            {icon?icon:null}

            {/* Button Text */}
            {text?text:null}
        </View>
    </TouchableNativeFeedback>
  )
}

export default Button