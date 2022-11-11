// react imports
import React from 'react'

// navigation imports
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

//screen/components imports
import ChatScreen from '../../screens/ChatScreen/ChatScreen'
import UserNavigationHeader from '../../components/Header/UserNavigationHeader';
import TabsNavigation from '../TabsNavigation';


const UserStackNavigation = () => {

  const Stack = createStackNavigator();
    
  return (
    <Stack.Navigator
      initialRouteName='TabsScreen'
      screenOptions={{
        headerShown:false,
        header:() => <UserNavigationHeader />,
        gestureEnabled:true,
        // gestureDirection:'horizontal',
        ...TransitionPresets.SlideFromRightIOS
      }}
    >
      {/* Main app screen (Tabs Screen) */}
      <Stack.Screen name='TabsScreen' options={{
        headerShown:true,
      }} component={TabsNavigation}/>

      {/* Chat Screen */}
      <Stack.Screen name='ChatScreen' component={ChatScreen}/>
    </Stack.Navigator>
  )
}

export default UserStackNavigation