import { StyleSheet, View } from "react-native";

export const Exe1 = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.faixaVertical}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    alignSelf: "center",
    justifyContent: "center",
  },
  faixaVertical: {
    flex: 1,
    backgroundColor: "#0ff",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
});
