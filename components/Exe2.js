import { StyleSheet, View } from "react-native";

export const Exe2 = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.faixaHorizontal}></View>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  faixaHorizontal: {
    flex: 0.2,
    backgroundColor: "#0ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
