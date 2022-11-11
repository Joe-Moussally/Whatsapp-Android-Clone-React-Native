// react imports
import React from 'react'

// navigation imports
import { createStackNavigator } from '@react-navigation/stack';

//screen imports
import ChatsScreen from '../../screens/ChatsScreens/ChatsScreen';
import ChatScreen from '../../screens/ChatScreen/ChatScreen'
import UserNavigation from '../UserNavigation';
import { Text } from 'react-native';
import HeaderRight from '../../components/Header/HeaderRight';


const ChatsStack = () => {

  const Stack = createStackNavigator();
    
  return (
    <Stack.Navigator
      initialRouteName='TabsScreen'
      screenOptions={{
        headerShown:false,
        headerTintColor:'white',
        headerTitle:'WhatsApp',
        headerRight:() => <HeaderRight />,
        headerStyle:{backgroundColor:'#156b4d',shadowColor:'#156b4d'}
      }}
    >
      <Stack.Screen name='TabsScreen' options={{
        headerShown:true,
      }} component={UserNavigation}/>
      <Stack.Screen name='ChatScreen' component={ChatScreen}/>
      <Stack.Screen name='ChatsScreen' component={ChatsScreen}/>
    </Stack.Navigator>
  )
}

export default ChatsStack