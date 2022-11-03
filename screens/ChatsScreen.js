import { Modal, Text, View } from 'react-native'
import React from 'react'
import ChatCard from '../components/ChatsComponents/ChatCard'

const ChatsScreen = () => {
  return (
    <View>

        <Modal
            visible={true}
            animationType='slide'
        >
            <Text>THIS IS MODAL</Text>
        </Modal>

      <ChatCard
        contactName='Joe Moussally'
        // contactImgUrl='../../assets/default_contact_picture.webp'
        lastMessage='Hello'
      />

      <ChatCard
        contactName='Elon Musk'
        // contactImgUrl='../../assets/default_contact_picture.webp'
        lastMessage='Howdy partner!'
      />
    </View>
  )
}

export default ChatsScreen