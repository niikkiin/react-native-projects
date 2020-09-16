import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ColorCounter = ({ textColor, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Text>{textColor}</Text>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button onPress={onIncrease} title={`Increase ${textColor}`} />
        </View>
        <View style={styles.btn}>
          <Button onPress={onDecrease} title={`Decrease ${textColor}`} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
  },
  btn: { margin: 10 },
});

export default ColorCounter;
