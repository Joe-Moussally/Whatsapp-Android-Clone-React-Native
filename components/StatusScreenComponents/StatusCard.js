// React/React Native imports
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'

const StatusCard = ({
    seen=false,
}) => {

    //phone screen width
    const screenWidth = Dimensions.get('window').width

  return (
    <TouchableOpacity>

        {/* Card container */}
        <View className={`h-[85px] flex-row items-center mx-1 py-1 pl-2 w-[${screenWidth}px]`}>

            {/* Contact image */}
            <View
                className={`
                    border-2 rounded-full p-[1.5px]
                    ${seen?'border-gray-500':'border-green-500'}
                `}
            >
                <Image
                    source={
                        require('../../test-assets/selfie1.jpg')
                    }
                    className='w-[50px] h-[50px] rounded-full'
                />
            </View>

            {/* Contact name + story post time */}
            <View className='h-[100%] pl-4 flex-1 justify-center -mt-1'>
                <Text className='text-lg font-semibold'>Elon Musk</Text>
                <Text className='text-gray-500 pl-[1px]'>Today, 10:22 pm</Text>
            </View>

        </View>
    </TouchableOpacity>
  )
}

export default StatusCard