import { StyleSheet, View } from "react-native";

export const Exe5 = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.quadrado, styles.azulClaro]}></View>
        <View style={[styles.quadrado, styles.azul]}></View>
        <View style={[styles.quadrado, styles.roxo]}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  quadrado: {
    // flex: 1,
    width: 100,
    height: 100,
  },
  azulClaro: {
    backgroundColor: "#0ff",
  },
  azul: {
    backgroundColor: "#00f",
  },
  roxo: {
    backgroundColor: "purple",
  },
});
