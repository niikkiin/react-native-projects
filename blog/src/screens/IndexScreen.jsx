import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context as BlogContext } from "../context/BlogContext";

// icon
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blog Posts</Text>
      <Button title="add new post" onPress={addBlogPost} />

      <FlatList
        style={styles.listContainer}
        keyExtractor={(blogPost) => blogPost.title}
        data={state}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Text style={styles.listItem}>{item.title}</Text>
            <Feather name="trash" style={styles.icon} />
          </View>
        )}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  header: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 10,
  },
  listContainer: {
    marginVertical: 15,
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
  listItem: {
  },
  icon: {
    fontSize: 25,
  },
});
