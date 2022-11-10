// react native imports
import { View, Text, TouchableOpacity, Image, TouchableNativeFeedback, Modal, Dimensions } from 'react-native'
import React from 'react'

// navigation imports
import { useNavigation } from '@react-navigation/native'

const ChatCard = ({
    contactImgUrl=null,
    contactName,
    lastMessageText=null,
    lastMessageTime=null,
    isRead=true,
    messagesNumber=0
}) => {

    const navigation = useNavigation()

    //phone screen width
    const screenWidth = Dimensions.get('window').width

  return (
    <TouchableNativeFeedback>

        {/* Card container */}
        <View className={`h-[70px] flex-row items-center mx-1 py-1 pl-2 w-[${screenWidth}px]`}>

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
            <View className='h-[100%] pl-5 flex-1 mt-2'>

                {/* Name + Last message time container */}
                <View className='flex-row items-center justify-between my-[2px] w-[100%] mr-5'>
                    <Text className='text-lg font-semibold'>{contactName}</Text>
                    {/* Last Message Time */}
                    <Text className='text-gray-500 text-[13px] mr-3'>{lastMessageTime}</Text>
                </View>
                
                <Text className='text-gray-500 pl-[1px]'>{lastMessageText}</Text>
            </View>

        </View>
    </TouchableNativeFeedback>
  )
}

export default ChatCard