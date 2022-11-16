// react/react native import
import { View, Text, ImageBackground, Dimensions, Platform } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

//package imports
import { Bubble, Day, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat'

// component imports
import ChatHeader from '../../components/ChatComponents/ChatHeader'
import SendButton from '../../components/SendButton'

// redux imports
import { useDispatch, useSelector } from 'react-redux'
import { addMessageToChat, getAllMessages, getChatById } from '../../redux/slices/messagesSlice'



const ChatScreen = ({route}) => {

  const dispatch = useDispatch()

  // parameters passed from ChatsScreen
  const routeParams = route.params

  //track the text input
  const [text,setText] = useState('')

  //get chat messages from store
  const messages = useSelector((state) => getChatById(state,{chatId:route.params.chatId}).messages)

  const userId=1

  //function that is called when the user presses 'send' button
  const onSend = useCallback((messages=[]) => {
    let messageTime = new Date()
    let messageObject = {
      _id: Math.random()*1000,
      text: messages[0].text,
      createdAt: messageTime.toString(),
      user: {_id: userId,}
    }
    
    // setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    dispatch(addMessageToChat({chatId:routeParams.chatId,message:messageObject}))
  },[text])


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
            marginRight:11,
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