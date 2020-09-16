import React from "react";
import { View, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Button
        style={styles.button}
        title="Go to Components Demo"
        onPress={() => navigate("Components")}
      />
      <Button
        style={styles.button}
        title="Go to Images Demo"
        onPress={() => navigate("Images")}
      />
      <Button
        style={styles.button}
        title="Go to List Screen Demo"
        onPress={() => navigate("Lists")}
      />
      <Button
        style={styles.button}
        title="Go to Counter Screen Demo"
        onPress={() => navigate("Counters")}
      />
      <Button
        style={styles.button}
        title="Go to Color Screen Demo"
        onPress={() => navigate("Colors")}
      />
      <Button
        style={styles.button}
        title="Go to Square Screen Demo"
        onPress={() => navigate("Squares")}
      />
      <Button
        style={styles.button}
        title="Go to Text Screen Demo"
        onPress={() => navigate("Texts")}
      />
      <Button
        style={styles.button}
        title="Go to Boxes Screen Demo"
        onPress={() => navigate("Boxes")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    margin: 10,
  },
});

export default HomeScreen;
