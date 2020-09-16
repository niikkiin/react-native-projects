import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: 'pink',
    width: 80,
    height: 80,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: 'lightgreen',
    width: 80,
    height: 80,
    marginTop: 80,
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // substitute to code above
    // ...StyleSheet.absoluteFillObject
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: 'lavender',
    width: 80,
    height: 80,
  },
});

export default BoxScreen;
