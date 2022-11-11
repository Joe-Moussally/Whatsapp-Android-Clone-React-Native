// react/react native import
import { View, Text, ImageBackground } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

//package imports
import { GiftedChat } from 'react-native-gifted-chat'

// component imports
import ChatHeader from '../../components/ChatComponents/ChatHeader'
import MessageInput from '../../components/ChatComponents/MessageInput'

// redux imports
import { useSelector } from 'react-redux'
import { getAllMessages, getChatById } from '../../redux/slices/messagesSlice'
import SendButton from '../../components/SendButton'


const ChatScreen = ({route}) => {

  // parameters passed from ChatsScreen
  const routeParams = route.params

  const [text,setText] = useState('')

  //get chat messages from store
  const [messages, setMessages] = useState([]);
  // const messages = useSelector((state) => getChatById(state,{chatId:route.params.chatId}))


  //function that is called when the user presses 'send' button
  const onSend = useCallback((messages=[]) => {
    setMessages(previousMessages => [...previousMessages,      {
      _id: 1,
      text: text,
      createdAt: new Date(),
      user: {
        _id: 2,
      },
    }])
    setText('')
  },[text])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
        },
      },
    ])
  }, [])

  return (
    <View className='flex-1'>

      {/* Chat Header */}
      <ChatHeader
        contactName={routeParams.contactName}
      />

      {/* Chat Screen Background */}
      <ImageBackground
        className='flex-1 absolute h-[100%] w-[100%] -z-10'
        source={require('../../assets/default_background.jpg')}
      />

      {/* Messages container */}
      <View className='flex-1'>
        <Text>{text}</Text>
        {
          messages.map(message => (
            <Text>{message.text}</Text>
          ))
        }
      </View>
        {/* <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id:1,
          }}
          //remove avatar container
          renderAvatar={() => null}
          renderInputToolbar={(prop) => {
            console.log(prop)
            return <MessageInput
                      onTextChanged={prop.onTextChanged}
                      onSend={prop.onSend}
                  />
          }}
          text={text}
          onInputTextChanged={text => setText(text)}
        /> */}

      <MessageInput
        setText={setText}
        textValue={text}
        onSend={onSend}
      />

    </View>
  )
}

export default ChatScreen