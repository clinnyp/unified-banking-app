import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerRight: () => (
            <Ionicons
              name="person-circle"
              style={{ marginRight: 15 }}
              size={28}
            />
          ),
          title: 'Accounts',
          tabBarIcon: () => <Ionicons name="wallet" size={28} />,
          headerTitleAlign: 'center',
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: 'Payments',
          tabBarIcon: () => <Ionicons name="card" size={28} />,
          headerTitleAlign: 'center',
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: 'Transfer',
          tabBarIcon: () => (
            <Ionicons name="paper-plane" size={27} color="black" />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({})
