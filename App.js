import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Exe1 } from "./components/Exe1";
import { Exe2 } from "./components/Exe2";
import { Exe3 } from "./components/Exe3";
import { Exe4 } from "./components/Exe4";
import { Exe5 } from "./components/Exe5";
import { Desafio } from "./components/Desafio";

export default function App() {
  return (
    <View style={styles.container}>
      <Desafio></Desafio>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
