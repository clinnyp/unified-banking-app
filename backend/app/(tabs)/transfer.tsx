import React, { useEffect, useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import TransferAccountsSelection from '../../components/TransferAccountsSelection'
import SelectAccounts from '../../components/SelectAccounts'
import { theme } from '../../theme'
import { useAccountStore } from '../../store/accountStore'
import { useNavigation, useRouter } from 'expo-router'
import BankingInputRow from '../../components/BankingInputRow'
import { transferMoney } from '../../api/api'
import LoadingIndicator from '../../components/LoadingIndicator'

export default function Transfer() {
  const [loading, setLoading] = useState(false)
  const from = useAccountStore((state) => state.from)
  const to = useAccountStore((state) => state.to)
  const amount = useAccountStore((state) => state.amount)
  const navigation = useNavigation()
  const router = useRouter()
  const resetTransferSelection = useAccountStore(
    (state) => state.resetTransferSelection
  )

  const handleCancel = () => {
    resetTransferSelection()
    router.replace('/')
  }

  useEffect(() => {
    const confirmTransfer = async () => {
      try {
        setLoading(true)
        const data = await transferMoney(to, from, amount)
        if (data.success) {
          setLoading(false)

          router.replace({
            pathname: '/receipt',
            params: {
              amount,
              fromAccName: from.name,
              fromAccNumber: from.formatted_account,
              toAccName: to.name,
              toAccNumber: to.formatted_account,
            },
          })
          resetTransferSelection()
        }
      } catch (error) {
        console.error('Transfer failed:', error)
      }
    }
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ paddingLeft: 12 }}
          onPress={handleCancel}
          hitSlop={20}
        >
          <Text style={{ color: theme.blue, fontSize: 18 }}>Cancel</Text>
        </Pressable>
      ),
      headerRight: () => (
        <Pressable
          onPress={confirmTransfer}
          style={{ paddingRight: 12 }}
          disabled={false}
          hitSlop={20}
        >
          <Text
            style={
              to !== '' && from !== '' && amount
                ? styles.header
                : styles.disabledHeader
            }
          >
            Continue
          </Text>
        </Pressable>
      ),
    })
  }, [to, from, amount])

  return (
    <View>
      <LoadingIndicator visible={loading} />
      <View style={styles.transferContainer}>
        <TransferAccountsSelection />
      </View>
      <View>
        <BankingInputRow
          label={'Amount'}
          subLabel={'$'}
          keyboardType="numeric"
        />
        <SelectAccounts />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  transferContainer: {
    paddingVertical: 20,
  },
  transferContainerSelected: {
    paddingVertical: 20,
  },
  disabledHeader: {
    fontSize: 18,
    color: theme.darkGrey,
  },
  header: {
    fontSize: 18,
    color: theme.blue,
  },
})
