// react/react native import
import { View, Text, ImageBackground, StyleSheet, TextInput, Dimensions } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

//package imports
import { Bubble, Day, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat'

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

  //track the text input
  const [text,setText] = useState('')

  //get chat messages from store
  const [messages, setMessages] = useState([]);
  // const messages = useSelector((state) => getChatById(state,{chatId:route.params.chatId}))

  const userId=1
  const contactId=2

  //function that is called when the user presses 'send' button
  const onSend = useCallback((messages=[]) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  },[text])

  useEffect(() => {
    setMessages([
      {
        _id: Math.random(),
        text: 'Hello Joe',
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
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id:1,
          }}
          //remove avatar container
          renderAvatar={() => null}

          //day indicator styling
          renderDay={(props) => (
            <Day {...props}
              containerStyle={{
                backgroundColor:'#bdbdbd',
                alignSelf:'center',
                paddingVertical:2,
                paddingHorizontal:5,
                borderRadius:5,
                elevation:1
              }}
              textStyle={{
                color:'white'
              }}
            />
          )}

          //message bubble styling
          renderBubble={(props) => (
            <Bubble {...props}
              wrapperStyle={{
                right:{
                    backgroundColor:'#308a5a',
                    elevation:2,
                },
                left:{
                  backgroundColor:'#f7f7f7',
                  elevation:2
                },
              }}
          />
          )}

          //send button styling
          renderSend={(props) => (
            <Send {...props}
              textStyle={{color:'#308a5a'}}
            />
          )}

          renderInputToolbar={(props) => (
            <InputToolbar {...props}
              containerStyle={{
                backgroundColor:'transparent',
                display:'flex',
                borderTopColor:'transparent',
                alignItems:'center',
                height:'auto'
              }}
            />
          )}

          textInputProps={{
            borderRadius:Dimensions.get('window').width*.05,
            marginBottom:4,
            marginHorizontal:4,
            backgroundColor:'#f7f7f7',
            paddingVertical:7,
            paddingHorizontal:16,
            elevation:2,
            maxHeight:125,
          }}
        />
{/* 
      <MessageInput
        setText={setText}
        textValue={text}
        onSend={onSend}
      /> */}

    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  textInput:{
    borderWidth:2,
    borderColor:'red'
  }
})