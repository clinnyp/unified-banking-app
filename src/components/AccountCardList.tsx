import { Text, View, StyleSheet, Image } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'

type Props = {
  accountName: string
  amount: string
  available: string
}

export default function AccountCardList({
  accountName,
  amount,
  available,
}: Props) {
  const image =
    'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
  return (
    <View style={styles.container}>
      <View style={styles.accountContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.accountImage} source={{ uri: image }} />
          <View style={{ paddingLeft: 12 }}>
            <Text style={{ fontSize: 14 }}>{accountName}</Text>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>{amount}</Text>
            <Text style={{ fontSize: 14, color: 'grey' }}>
              {available} Available
            </Text>
          </View>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12,
    borderBottomWidth: 0.6,
    borderColor: 'grey',
  },
  accountImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
})
