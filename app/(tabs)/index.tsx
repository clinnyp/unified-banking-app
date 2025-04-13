import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native'
import AccountCard from '../../components/AccountCard'
import AccountCardList from '../../components/AccountCardList'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'
import { useAccountStore } from '../../store/accountStore'

export default function Accounts() {
  const [listToggle, setListToggle] = useState(true)
  const navigation = useNavigation()
  const getAccounts = useAccountStore((state) => state.getAccounts)
  const accounts = useAccountStore((state) => state.accounts)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getAccounts()
      } catch (error) {
        console.error('Failed to fetch accounts:', error)
      }
    }
    fetchData()
  }, [])

  const handleListToggle = (cardToggle: boolean) => {
    return cardToggle ? (
      <Pressable onPress={() => setListToggle((prev) => !prev)} hitSlop={20}>
        <MaterialCommunityIcons
          name="card-outline"
          size={24}
          style={{ marginLeft: 16 }}
        />
      </Pressable>
    ) : (
      <Pressable onPress={() => setListToggle((prev) => !prev)} hitSlop={20}>
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
        data={accounts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) =>
          listToggle ? (
            <AccountCard
              name={item.name}
              bankName={item.balance.current}
              current={item.balance.current}
              available={item.balance.available}
            />
          ) : (
            <AccountCardList
              accountName={item.name}
              current={item.balance.current}
              available={item.balance.available}
              displayIcon={item.connection.logo}
              showChevron
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
