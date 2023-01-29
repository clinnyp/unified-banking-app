import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function BankCard(props: any): JSX.Element {
  const { name, bankName, amount, available } = props;
  const image = {
    uri: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  };
  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.detailsContainer}>
            <Text style={{ textAlign: "center", fontSize: 14 }}>{name}</Text>
            <Text
              style={{ textAlign: "center", fontSize: 24, paddingVertical: 5 }}
            >
              {amount}
            </Text>
            <Text style={{ textAlign: "center", fontSize: 12 }}>
              {`${available} Available`}
            </Text>
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
    // maxHeight: "20%",
  },
  detailsContainer: {
    alignSelf: "center",
    borderStyle: "solid",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    minWidth: "50%",
    margin: "5%",
    paddingVertical: 10,
    shadowColor: "#000",
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
    height: "100%",
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
