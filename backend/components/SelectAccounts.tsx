import { FlatList, Text, View, StyleSheet } from 'react-native'
import AccountCardList from './AccountCardList'
import Entypo from '@expo/vector-icons/Entypo'
import { useEffect, useState } from 'react'
import { useAccountStore } from '../store/accountStore'

export default function SelectAccounts() {
  const accounts = useAccountStore((state) => state.accounts)
  const getAccounts = useAccountStore((state) => state.getAccounts)
  const from = useAccountStore((state) => state.from)
  const to = useAccountStore((state) => state.to)
  const updateFrom = useAccountStore((state) => state.updateFrom)
  const updateTo = useAccountStore((state) => state.updateTo)

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

  const handleAccountSelection = (account) => {
    if (!from) {
      updateFrom(account)
    }
    if (from && !to) {
      updateTo(account)
    }
  }

  return (
    <View>
      <View style={styles.selectionText}>
        <Text>Select your accounts</Text>
        <Entypo name="chevron-down" size={24} color="black" />
      </View>
      <FlatList
        data={accounts}
        renderItem={({ item }) => (
          <AccountCardList
            accountName={item.name}
            current={item.balance.current}
            available={item.balance.available}
            displayIcon={item.connection.logo}
            onPress={() => handleAccountSelection(item)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  transferContainer: {
    marginVertical: 20,
  },
  selectionContainer: {
    alignItems: 'center',
  },
  selectionText: {
    paddingHorizontal: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
