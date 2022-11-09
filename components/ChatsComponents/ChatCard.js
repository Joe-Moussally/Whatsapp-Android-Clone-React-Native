import { View, Text, TouchableOpacity, Image, TouchableNativeFeedback, Modal } from 'react-native'
import React from 'react'

const ChatCard = ({
    contactImgUrl=null,
    contactName,
    lastMessage=null,
    isRead=true,
    messagesNumber=0
}) => {
  return (
    <TouchableNativeFeedback>

        {/* Card container */}
        <View className='h-[70px] flex-row items-center border-b-[.4px] border-gray-400 mx-1 p-2'>

            {/* Contact image */}
            <TouchableOpacity
                // onPress={}
            >
                <Image
                    source={
                        // contactImgUrl?
                        // require(contactImgUrl):
                        require('../../assets/default_contact_picture.webp')
                    }
                    className='w-[58px] h-[58px] rounded-full'
                />
            </TouchableOpacity>
            
            {/* Contact name + Last message Container */}
            <View className='h-[100%] justify-around pl-5'>
                <Text className='text-lg font-semibold'>{contactName}</Text>
                <Text className='text-gray-500 pl-[1px]'>{lastMessage}</Text>
            </View>

        </View>
    </TouchableNativeFeedback>
  )
}

export default ChatCard