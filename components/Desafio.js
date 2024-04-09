import { StyleSheet, View, Text } from "react-native";

export const Desafio = () => {
  return (
    <>
    <View style={styles.statusbar}></View>
    <View style={styles.box1}>
        <View style={styles.square1}></View>
        <View style={styles.rectangle1}></View>
    </View>
    <View style={styles.box2}>
        <View style={styles.rectangle2}></View>
        <View style={styles.rectangle3}></View>
    </View>
    <View style={styles.box3}>
        <View style={styles.square1}></View>
        <View style={styles.square1}></View>
        <View style={styles.square1}></View>
        <View style={styles.square1}></View>
        <View style={styles.square1}></View>
        <View style={styles.square1}></View>

    </View>
    <View style={styles.box4}></View>
    </>
  );
}

const styles = StyleSheet.create({
    statusbar: {
        flex: 0.3,
        backgroundColor: 'cyan',
    },
    box1 : {
        flex: 1.8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    box2 : {
        flex: 0.8,
        backgroundColor: 'cyan',
        flexDirection: 'row'
    },
    box3 : {
        flex: 2.2,
        backgroundColor: 'white',
        gap: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around'
    },
    box4 : {
        flex: 0.4,
        backgroundColor: 'darkblue'
    },
    square1: {
        backgroundColor: 'orange',
        width: 100,
        height: 110
    },
    rectangle1: {
        backgroundColor: 'orange',
        width: 180,
        height: 40
    },
    rectangle2: {
        flex: 1,
        backgroundColor: 'purple',
        height: '90%'
    },
    rectangle3: {
        flex: 1,
        backgroundColor: 'blue',
        height: '90%'
    },
})