// react imports
import { View, Text } from 'react-native'
import React from 'react'

// navigation imports
import { createStackNavigator } from '@react-navigation/stack';

//screen imports
import ChatsScreen from '../../screens/ChatsScreens/ChatsScreen';
import ProfilePictureModal from '../../screens/ChatsScreens/ProfilePictureModal';



const ChatsStack = () => {

  const Stack = createStackNavigator();
    
  return (
    <Stack.Navigator
      initialRouteName='ChatsScreen'
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name='ChatsScreen' component={ChatsScreen}/>
      <Stack.Screen name='ProfilePictureModal' component={ProfilePictureModal}/>
    </Stack.Navigator>
  )
}

export default ChatsStack