import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Tab Screens
import ChatsScreen from '../screens/ChatsScreen'
import StatusScreen from '../screens/StatusScreen'
import CallsScreen from '../screens/CallsScreen'


const Tab = createMaterialTopTabNavigator();

const UserNavigation = () => {

  return (

      <Tab.Navigator
        initialRouteName='Chats'
        screenOptions={{
          tabBarLabelStyle:{fontWeight:'bold'},
          tabBarStyle:{backgroundColor:'#156b4d'},
          tabBarActiveTintColor:'white',
          tabBarIndicatorStyle:{ backgroundColor:'white', height: 2},
        }}
      >

        {/* Chats Screen */}
        <Tab.Screen
          name="Chats"
          component={ChatsScreen}
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