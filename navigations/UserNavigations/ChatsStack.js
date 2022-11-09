// react imports
import { View, Text } from 'react-native'
import React from 'react'

// navigation imports
import { createStackNavigator } from '@react-navigation/stack';

//screen imports
import ChatsScreen from '../../screens/ChatsScreen';



const ChatsStack = () => {

  const Stack = createStackNavigator();
    
  return (
    <Stack.Navigator
      initialRouteName='Chats'
      screenOptions={{
        headerShown:false
      }}
    >
      <Stack.Screen name='ChatsScreen' component={ChatsScreen}/>
    </Stack.Navigator>
  )
}

export default ChatsStack