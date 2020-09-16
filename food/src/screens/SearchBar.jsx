import React from "react";
import { StyleSheet, Text, View } from "react-native";

// icon
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    backgroundColor: "#dedede",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    // alignItems: 'center'
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
    fontSize: 35,
  },
});

export default SearchBar;
