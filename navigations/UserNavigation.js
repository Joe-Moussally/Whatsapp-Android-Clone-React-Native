import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatsScreen from '../screens/ChatsScreen'
import StatusScreen from '../screens/StatusScreen'
import CallsScreen from '../screens/CallsScreen'


const Tab = createMaterialTopTabNavigator();

const UserNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  )
}

export default UserNavigation