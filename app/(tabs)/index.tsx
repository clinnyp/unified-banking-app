import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native'
import AccountCard from '../../src/components/AccountCard'
import AccountCardList from '../../src/components/AccountCardList'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'

const DATA = [
  {
    id: 1,
    name: 'Daily Expenses',
    bankName: 'Westpac',
    amount: '$1010.33',
    available: '$1010.33',
  },
  {
    id: 2,
    name: 'Splurge',
    bankName: 'ANZ',
    amount: '$52.33',
    available: '$21.67',
  },
  {
    id: 3,
    name: 'Mortgage',
    bankName: 'ANZ',
    amount: '$11010.45',
    available: '$11010.45',
  },
]

export default function Accounts() {
  const [listToggle, setListToggle] = useState(false)
  const navigation = useNavigation()

  const handleListToggle = (cardToggle: boolean) => {
    return cardToggle ? (
      <Pressable onPress={() => setListToggle((prev) => !prev)}>
        <MaterialCommunityIcons
          name="card-outline"
          size={24}
          style={{ marginLeft: 16 }}
        />
      </Pressable>
    ) : (
      <Pressable onPress={() => setListToggle((prev) => !prev)}>
        <FontAwesome6 name="list" size={20} style={{ marginLeft: 16 }} />
      </Pressable>
    )
  }
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => handleListToggle(listToggle),
    })
  }, [listToggle])
  return (
    <SafeAreaView style={{ flex: 0 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) =>
          listToggle ? (
            <AccountCard
              name={item.name}
              bankName={item.bankName}
              amount={item.amount}
              available={item.available}
            />
          ) : (
            <AccountCardList
              accountName={item.name}
              amount={item.amount}
              available={item.available}
            />
          )
        }
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
