import { View, TextInput, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import React from 'react'

// icon imports
import { FontAwesome5 } from '@expo/vector-icons';

// packages imports
import EmojiModal from 'react-native-emoji-modal';

// components imports
import SendButton from '../SendButton';

const MessageInput = ({
  setText=() => {},
  onSend=() => {},
  textValue=''
}) => {
  return (
    <View className='flex-row items-center px-[2px] -mt-2'>

      {/* Message input container */}
      <View
          className='flex-row items-center bg-[#f7f7f7] flex-1  mx-1 my-1 p-2 rounded-[25px]'
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
              value={textValue}
              onChangeText={(text) => setText(text)}
          />

          {/* <EmojiModal
            onEmojiSelected={(emoji) => console.log(emoji)}
            containerStyle={{position:'absolute', bottom:26, left:'-100%'}}
          /> */}

      </View>

      {/* Send Button */}
      <SendButton onSend={onSend}/>

    </View>
  )
}

export default MessageInput