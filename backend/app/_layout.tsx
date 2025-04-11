import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs, useRouter } from 'expo-router'
import { theme } from '../theme'

export default function RootLayout() {
  return <RootLayoutNav />
}

function RootLayoutNav() {
  const router = useRouter()

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="receipt"
        options={{
          title: 'Receipt',
          headerRight: () => (
            <Pressable onPress={() => router.replace('/')}>
              <Text style={{ color: theme.blue, fontSize: 18 }}>Done</Text>
            </Pressable>
          ),
        }}
      />
    </Stack>
  )
}

const styles = StyleSheet.create({})
