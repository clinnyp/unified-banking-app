import { Modal, StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import { theme } from '../theme'

export default function LoadingIndicator({ visible }) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator color={theme.blue} size="large" />
          <Text style={{ color: theme.blue }}>Processing...</Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    padding: 50,
    borderRadius: 20,
    backgroundColor: '#0000001A',
  },
})
