import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar term={term} handleTermChange={e => setTerm(e)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
