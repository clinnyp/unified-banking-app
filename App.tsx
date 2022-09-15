import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Slider, SafeAreaView } from "react-native";

import BankCard from "./src/components/BankCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BankCard />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
