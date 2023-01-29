import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

import BankCard from "../components/BankCard";

const DATA = [
  {
    name: "Daily Expenses",
    bankName: "Westpac",
    amount: "$1011.33",
    available: "$1011.33",
  },
  {
    name: "Splurge",
    bankName: "ANZ",
    amount: "$53.33",
    available: "$22.67",
  },
  {
    name: "Mortgage",
    bankName: "ANZ",
    amount: "$11011.45",
    available: "$11011.45",
  },
];

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <BankCard
            name={item.name}
            bankName={item.bankName}
            amount={item.amount}
            available={item.available}
          />
        )}
      />
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
