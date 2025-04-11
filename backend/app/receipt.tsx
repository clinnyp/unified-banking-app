import { StyleSheet, Text, View, Modal, SafeAreaView } from 'react-native'
import ReceiptConfirmation from '../components/ReceiptConfirmation'
import { useLocalSearchParams } from 'expo-router'
import LoadingIndicator from '../components/LoadingIndicator'

export default function Receipt() {
  const params = useLocalSearchParams()
  const { amount, fromAccName, fromAccNumber, toAccName, toAccNumber } = params

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
