import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Tab Screens/Stacks
import StatusScreen from '../screens/StatusScreen'
import CallsScreen from '../screens/CallsScreen'
import ChatsStack from './UserNavigations/ChatsStack';


const Tab = createMaterialTopTabNavigator();

const UserNavigation = () => {

  return (

      <Tab.Navigator
        initialRouteName='ChatsStack'
        screenOptions={{
          tabBarLabelStyle:{fontWeight:'bold'},
          tabBarStyle:{backgroundColor:'#156b4d'},
          tabBarActiveTintColor:'white',
          tabBarIndicatorStyle:{ backgroundColor:'white', height: 2},
        }}
      >

        {/* Chats Screen */}
        <Tab.Screen
          name="ChatsStack"
          options={{title:'CHATS'}}
          component={ChatsStack}
        />

        {/* Status Screen */}
        <Tab.Screen
          name="Status"
          component={StatusScreen}
        />

        {/* Calls Screen */}
        <Tab.Screen
          name="Calls"  
          component={CallsScreen}
        />

      </Tab.Navigator>
  )
}

export default UserNavigation