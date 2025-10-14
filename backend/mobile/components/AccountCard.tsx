import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
} from 'react-native'
import { formatCurrency } from '../utils'

type Props = {
  name: string
  bankName: string
  current: string
  available: string
}

export default function BankCard({
  name,
  current,
  available,
}: Props): JSX.Element {
  const { width } = useWindowDimensions()
  const imageSize = Math.min(width / 2.5)

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/card_background.jpg')}
          resizeMode="cover"
          style={[styles.image, { maxHeight: imageSize }]}
        >
          <View
            style={[
              styles.detailsContainer,
              { marginVertical: 20, paddingVertical: 12 },
            ]}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                fontWeight: '600',
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 32,
                paddingVertical: 5,
                fontWeight: '400',
              }}
            >
              {formatCurrency(Number(current))}
            </Text>
            <Text
              style={{ textAlign: 'center', fontSize: 12, color: '#777986' }}
            >
              {`${formatCurrency(Number(available))} Available`}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  detailsContainer: {
    alignSelf: 'center',
    borderStyle: 'solid',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 16,
    minWidth: '50%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
