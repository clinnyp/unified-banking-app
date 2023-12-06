import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import BankCard from '../../src/components/BankCard'

const DATA = [
  {
    name: 'Daily Expenses',
    bankName: 'Westpac',
    amount: '$1010.33',
    available: '$1010.33',
  },
  {
    name: 'Splurge',
    bankName: 'ANZ',
    amount: '$52.33',
    available: '$21.67',
  },
  {
    name: 'Mortgage',
    bankName: 'ANZ',
    amount: '$11010.45',
    available: '$11010.45',
  },
]

export default function Accounts() {
  return (
    <SafeAreaView style={{ flex: 0 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <BankCard
            name={item.name}
            bankName={item.bankName}
            amount={item.amount}
            available={item.available}
          />
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})
