import { Image, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { theme } from '../theme'
import { FontAwesome6 } from '@expo/vector-icons'
import { useAccountStore } from '../store/accountStore'

export default function TransferAccountsSelection() {
  const from = useAccountStore((state) => state.from)
  const to = useAccountStore((state) => state.to)

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <View style={styles.accountContainer}>
          <View style={styles.selectionButton}>
            {from ? (
              <Image
                source={{ uri: from.connection.logo }}
                style={styles.accountSelected}
              />
            ) : (
              <FontAwesome6 name="add" size={24} color={theme.blue} />
            )}
          </View>
        </View>

        <View>
          <AntDesign name="arrowright" size={28} color={theme.blue} />
        </View>

        <View style={styles.accountContainer}>
          <View style={styles.selectionButton}>
            {to ? (
              <Image
                source={{ uri: from.connection.logo }}
                style={styles.accountSelected}
              />
            ) : (
              <FontAwesome6 name="add" size={24} color={theme.blue} />
            )}
          </View>
        </View>
      </View>

      <View style={styles.labelRow}>
        <View style={styles.labelContainer}>
          <Text style={styles.accountLabel}>From:</Text>
          <Text style={styles.accountText}>
            {from ? `${from.name}` : `Select an account`}
          </Text>
        </View>

        <View style={styles.spacer} />

        <View style={styles.labelContainer}>
          <Text style={styles.accountLabel}>To:</Text>
          <Text style={styles.accountText}>
            {to ? `${to.name}` : `Select an account`}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '25%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 8,
  },
  accountContainer: {
    alignItems: 'center',
  },
  labelContainer: {
    alignItems: 'center',
    width: 100,
  },
  selectionButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.blue,
    borderWidth: 1,
  },
  accountSelected: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  accountLabel: {
    textAlign: 'center',
  },
  accountText: {
    textAlign: 'center',
    color: theme.blue,
    marginTop: 4,
  },

  spacer: {
    width: 28,
  },
})
