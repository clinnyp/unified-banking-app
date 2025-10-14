import {
  KeyboardTypeOptions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { theme } from '../theme'
import Entypo from '@expo/vector-icons/Entypo'
import { useState } from 'react'
import { useAccountStore } from '../store/accountStore'

type Props = {
  label: string
  subLabel: string
  keyboardType: KeyboardTypeOptions
}

export default function BankingInputRow({
  label,
  subLabel,
  keyboardType,
}: Props) {
  const [amountInput, onChangeAmount] = useState('')
  const updateAmount = useAccountStore((state) => state.updateAmount)
  const amount = useAccountStore((state) => state.amount)

  const handleOnChange = (amount) => {
    onChangeAmount(amount)
    updateAmount(amount)
  }

  const handleResetButton = () => {
    onChangeAmount('')
    updateAmount('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.separator}>
        <View style={styles.labelContainer}>
          <Text>{`${label}:`}</Text>
          <View style={styles.inputContainer}>
            <View style={{ flexDirection: 'row', overflow: 'hidden', flex: 1 }}>
              <Text style={{ color: theme.blue }}>{`${subLabel}`}</Text>
              {/* <TouchableWithoutFeedback onPress={handleInputSelection}> */}
              <TextInput
                style={{ flex: 1 }}
                onChangeText={handleOnChange}
                value={amount}
                keyboardType={keyboardType}
              />
              {/* </TouchableWithoutFeedback> */}
            </View>
            <View style={styles.iconContainer}>
              {amountInput && (
                <Pressable onPress={handleResetButton}>
                  <Entypo
                    style={{ alignSelf: 'center' }}
                    name="circle-with-cross"
                    size={16}
                    color="black"
                  />
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: 12,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderColor: theme.darkGrey,
  },
  labelContainer: {
    paddingVertical: 12,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  inputWrapper: {
    flexDirection: 'row',
    flex: 1,
    marginRight: 8,
    overflow: 'hidden',
  },
  iconContainer: {
    paddingRight: 12,
    paddingLeft: 4,
  },
})
