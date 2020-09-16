import React, { useReducer, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const reducer = (state, action) => {
  const { type, payload } = action;
  const { count } = state;
  switch (type) {
    case "increase":
      return {
        ...state,
        count: count + payload,
      };
    case "decrease":
      return {
        ...state,
        count: count - payload,
      };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Current Count:</Text>
      <Text style={styles.counter}>{count}</Text>

      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button
            title="Increase"
            onPress={() => dispatch({ type: "increase", payload: 1 })}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Decrease"
            onPress={() => dispatch({ type: "decrease", payload: 1 })}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // height: 100
  },
  counter: {
    fontSize: 75,
  },
  label: {
    fontSize: 45,
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    margin: 10,
  },
});

export default CounterScreen;
