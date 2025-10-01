import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#4F46E5',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { 
        backgroundColor: '#E0E7FF',
        borderTopWidth: 1,
        borderTopColor: '#C7D2FE',
        height: 80,
        paddingBottom: 10,
        paddingTop: 10,
      },
      tabBarLabelStyle: { 
        fontSize: 14,
        fontWeight: '600',
      },
      headerShown: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (<Ionicons name="flash-outline" color={color} size={size} />),
        }}/>
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (<Ionicons name="settings" color={color} size={size} />),
        }}/>

    </Tabs>
  )
}

export default _layout