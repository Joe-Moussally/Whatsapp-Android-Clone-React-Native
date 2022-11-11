// react imports
import React from 'react'

// navigation imports
import { createStackNavigator } from '@react-navigation/stack';

//screen/components imports
import ChatScreen from '../../screens/ChatScreen/ChatScreen'
import UserNavigation from '../UserNavigation';
import UserNavigationHeader from '../../components/Header/UserNavigationHeader';


const ChatsStack = () => {

  const Stack = createStackNavigator();
    
  return (
    <Stack.Navigator
      initialRouteName='TabsScreen'
      screenOptions={{
        headerShown:false,
        header:() => <UserNavigationHeader />,
      }}
    >
      {/* Main app screen (Tabs Screen) */}
      <Stack.Screen name='TabsScreen' options={{
        headerShown:true,
      }} component={UserNavigation}/>

      {/* Chat Screen */}
      <Stack.Screen name='ChatScreen' component={ChatScreen}/>
    </Stack.Navigator>
  )
}

export default ChatsStack