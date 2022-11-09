// react native imports
import { View, Text, TouchableOpacity, Image, TouchableNativeFeedback, Modal } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

// navigation imports

const ChatCard = ({
    contactImgUrl=null,
    contactName,
    lastMessageText=null,
    lastMessageTime=null,
    isRead=true,
    messagesNumber=0
}) => {

    const navigation = useNavigation()

  return (
    <TouchableNativeFeedback>

        {/* Card container */}
        <View className='h-[70px] flex-row items-center mx-1 py-1 px-3 w-[100%]'>

            {/* Contact image */}
            <TouchableOpacity
                onPress={() => {navigation.navigate('ProfilePictureModal')}}
            >
                <Image
                    source={
                        // contactImgUrl?
                        // require(contactImgUrl):
                        require('../../assets/default_contact_picture.webp')
                    }
                    className='w-[50px] h-[50px] rounded-full'
                />
            </TouchableOpacity>
            
            {/* Contact name + Last message Container */}
            <View className='h-[100%] pl-5'>

                {/* Name + Last message time container */}
                <View>
                    <Text className='text-lg font-semibold mt-[1px]'>{contactName}</Text>
                </View>
                <Text className='text-gray-500 pl-[1px]'>{lastMessageText}</Text>
            </View>

        </View>
    </TouchableNativeFeedback>
  )
}

export default ChatCard