import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
} from 'react-native'

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
  const image = {
    uri: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  }
  const { width } = useWindowDimensions()
  const imageSize = Math.min(width / 2.5)

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={image}
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
              ${current == '0' ? '0.00' : current}
            </Text>
            <Text
              style={{ textAlign: 'center', fontSize: 12, color: '#777986' }}
            >
              ${available == '0' ? '0.00' : available} Available
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
