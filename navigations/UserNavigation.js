import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatsScreen from '../screens/ChatsScreen'
import StatusScreen from '../screens/StatusScreen'
import CallsScreen from '../screens/CallsScreen'
import { Text, View } from 'react-native';


const Tab = createMaterialTopTabNavigator();

const UserNavigation = () => {
  return (
      <Tab.Navigator
        initialRouteName='Chats'
        screenOptions={{
          tabBarLabelStyle:{fontWeight:'bold'},
          tabBarStyle:{backgroundColor:'#156b4d'},
          tabBarActiveTintColor:'white',
          tabBarIndicatorStyle:{ backgroundColor:'white', height: 2}
        }}
      >
        <Tab.Screen
          name="Chats"
          component={ChatsScreen}
          options={
            {tabBarLabelStyle:{fontWeight:'bold'}}
          }
        />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
  )
}

export default UserNavigation