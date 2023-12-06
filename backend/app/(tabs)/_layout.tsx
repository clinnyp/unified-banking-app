import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: 'Accounts', headerTitleAlign: 'center' }}
      />
      <Tabs.Screen
        name="payments"
        options={{ title: 'Payments', headerTitleAlign: 'center' }}
      />
      <Tabs.Screen
        name="transfer"
        options={{ title: 'Transfer', headerTitleAlign: 'center' }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({})
