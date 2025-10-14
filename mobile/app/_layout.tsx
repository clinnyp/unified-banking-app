import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack, Tabs, useRouter } from 'expo-router'

export default function RootLayout() {
  return <RootLayoutNav />
}

function RootLayoutNav() {
  const router = useRouter()

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="receipt" />
    </Stack>
  )
}

const styles = StyleSheet.create({})
