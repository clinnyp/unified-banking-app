import { StyleSheet, SafeAreaView, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Accounts from "./src/screens/Accounts";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accounts"
          component={Accounts}
          options={{
            // headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => console.log("logged out!!")}
                title="Log Out"
                color="#0A84FF"
              />
            ),
            headerLeft: () => (
              <Button
                onPress={() => console.log("logged out!!")}
                title="Transfer"
                color="#0A84FF"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
