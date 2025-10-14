import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import { formatCurrency } from '../utils'

type Props = {
  accountName: string
  current: string
  available: string
  displayIcon: string
  showChevron?: boolean
  onPress?: () => void
}

export default function AccountCardList({
  accountName,
  current,
  available,
  displayIcon,
  showChevron,
  onPress,
}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.accountContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.accountImage} source={{ uri: displayIcon }} />
          <View style={{ paddingLeft: 12 }}>
            <Text style={{ fontSize: 14 }}>{accountName}</Text>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>
              {formatCurrency(Number(current))}
            </Text>
            <Text style={{ fontSize: 14, color: 'grey' }}>
              {`${formatCurrency(Number(available))} Available`}
            </Text>
          </View>
        </View>
        {showChevron && (
          <View style={{ alignSelf: 'center' }}>
            <Entypo name="chevron-right" size={24} color="black" />
          </View>
        )}
      </View>
    </Pressable>
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
