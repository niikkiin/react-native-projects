import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styles.text}>Enter Password:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(e) => setPassword(e)}
      />
      {password ? (
        <View>
          {password.length <= 5 ? (
            <Text style={styles.validation}>
              Password must be longer than 5 characters
            </Text>
          ) : null}
        </View>
      ) : (
        <Text style={styles.validation}>Password is required.</Text>
      )}

      {/* <Text style={styles.password}>{password}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 30,
    marginLeft: 15,
    marginTop: 15,
  },
  validation: {
    fontSize: 20,
    marginHorizontal: 15,
  },
});

export default TextScreen;
