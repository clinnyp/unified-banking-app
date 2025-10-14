import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { theme } from '../theme'
import { formatCurrency } from '../utils'

type Props = {
  amount: string | string[]
  fromAccName: string | string[]
  fromAccNumber: string | string[]
  toAccName: string | string[]
  toAccNumber: string | string[]
}

export default function ReceiptConfirmation({
  amount,
  fromAccName,
  fromAccNumber,
  toAccName,
  toAccNumber,
}: Props) {
  return (
    <View>
      <View style={styles.rowContainer}>
        <AntDesign name="check" size={24} color="black" />
        <Text style={styles.text}>Transfer successful</Text>
      </View>
      <View style={{ paddingLeft: 12 }}>
        <View style={{ marginTop: 32 }}>
          <Text style={styles.amount}>{formatCurrency(Number(amount))}</Text>
        </View>
        <View style={{ gap: 2, marginTop: 12 }}>
          <View>
            <Text style={{ fontWeight: '600', fontSize: 16 }}>From:</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>{fromAccName}</Text>
          </View>
          <View>
            <Text style={{ color: theme.darkGrey }}>{fromAccNumber}</Text>
          </View>
        </View>
        <View style={{ gap: 2, marginTop: 12 }}>
          <View>
            <Text style={{ fontWeight: '600', fontSize: 16 }}>To:</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>{toAccName}</Text>
          </View>
          <Text style={{ color: theme.darkGrey }}>{toAccNumber}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 12,
    backgroundColor: theme.green,
    paddingVertical: 10,
  },
  text: {
    color: 'black',
  },
  amount: {
    fontSize: 26,
    fontWeight: '600',
  },
  detailsContainer: {
    paddingLeft: 12,
  },
})
