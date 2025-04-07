import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerRight: () => (
            <Pressable hitSlop={20}>
              <Ionicons
                name="person-circle"
                style={{ marginRight: 15 }}
                size={28}
              />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable hitSlop={20}>
              <FontAwesome6 name="list" size={20} style={{ marginLeft: 15 }} />
            </Pressable>
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
          tabBarIcon: () => <FontAwesome6 name="money-bill" size={28} />,
          headerTitleAlign: 'center',
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: 'Transfer',
          headerTitle: 'Transfer funds',
          tabBarIcon: () => (
            <FontAwesome6 name="money-bill-transfer" size={28} />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({})
