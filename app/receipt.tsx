import { StyleSheet, Text, View, Pressable } from 'react-native'
import ReceiptConfirmation from '../components/ReceiptConfirmation'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import { useAccountStore } from '../store/accountStore'
import { useEffect } from 'react'
import { theme } from '../theme'

export default function Receipt() {
  const params = useLocalSearchParams()
  const { amount, fromAccName, fromAccNumber, toAccName, toAccNumber } = params
  const accounts = useAccountStore((state) => state.accounts)
  const navigation = useNavigation()
  const router = useRouter()

  useEffect(() => {
    navigation.setOptions({
      title: 'Receipt',
      headerRight: () => (
        <Pressable onPress={() => router.replace('/')}>
          <Text style={{ color: theme.blue, fontSize: 18 }}>Done</Text>
        </Pressable>
      ),
    })
  }, [])

  return (
    <View>
      <ReceiptConfirmation
        amount={amount}
        fromAccName={fromAccName}
        fromAccNumber={fromAccNumber}
        toAccName={toAccName}
        toAccNumber={toAccNumber}
      />
    </View>
  )
}

const stylesheet = StyleSheet.create({})
