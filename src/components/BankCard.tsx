import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function BankCard(props: any): JSX.Element {
  //   const { title } = props;
  const image = {
    uri: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  };
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.detailsContainer}>
            <Text>Daily Expenses</Text>
            <Text>$30.45</Text>
            <Text>$30.07 Available</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    maxHeight: "15%",
  },
  detailsContainer: {
    alignSelf: "center",
    borderStyle: "solid",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0",
  },
});
