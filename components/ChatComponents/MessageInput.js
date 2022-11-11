import { View, Text, TextInput, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import React from 'react'

// icon imports
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import EmojiModal from 'react-native-emoji-modal';

const MessageInput = () => {
  return (
    <View className='flex-row items-center px-[2px]'>

      {/* Message input container */}
      <View
          className='flex-row items-center bg-[#f7f7f7] flex-1  mx-2 my-1 p-2 rounded-[25px]'
          style={{elevation:2}}
      >

          {/* emoji keyboard button */}
          <TouchableOpacity className='mb-auto mt-[1px]'>
              <FontAwesome5 name="smile" size={24} color="#b5b5b5" />
          </TouchableOpacity>

          <TextInput
              className='text-lg ml-2 flex-1 mr-2 max-h-[125px]'
              placeholder='Type a message...'
              cursorColor='#156b4d'
              multiline={true}
          />

          {/* <EmojiModal
            onEmojiSelected={(emoji) => console.log(emoji)}
            containerStyle={{position:'absolute', bottom:26, left:'-100%'}}
          /> */}

      </View>

      {/* Send Button */}
      <TouchableOpacity>
        <View
          className='bg-[#1c9149] h-[45px] w-[45px] rounded-full items-center justify-center shadow-md shadow-black'
        >
          <Ionicons name="send" size={20} color="white" />
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default MessageInput