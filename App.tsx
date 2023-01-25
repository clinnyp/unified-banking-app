import { StyleSheet, SafeAreaView, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Accounts from "./src/screens/Accounts";

const Tab = createBottomTabNavigator();

function Placeholder({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Accounts") {
              iconName = focused ? "wallet" : "wallet-outline";
            } else if (route.name === "Transfer") {
              iconName = focused
                ? "swap-horizontal"
                : "swap-horizontal-outline";
            } else if (route.name === "Payments") {
              iconName = focused ? "cash" : "cash-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Accounts"
          component={Accounts}
          options={{
            headerRight: () => (
              <Text
                style={[styles.button, { marginRight: 15 }]}
                onPress={() => console.log("logged out")}
              >
                Log Out
              </Text>
            ),
            headerLeft: () => (
              <Ionicons
                name="list"
                style={{ marginLeft: 15 }}
                size={24}
                color="#007AFF"
              />
            ),
            headerTitleAlign: "center",
          }}
        />
        <Tab.Screen
          name="Transfer"
          component={Placeholder}
          options={{ headerTitleAlign: "center" }}
        />
        <Tab.Screen name="Payments" component={Placeholder} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    color: "#0A84FF",
    fontWeight: "500",
    fontSize: 18,
  },
});
