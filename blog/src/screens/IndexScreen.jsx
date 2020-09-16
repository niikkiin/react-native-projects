import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blog Posts</Text>
      <Button title="add new post" onPress={addBlogPost} />

      <FlatList
        style={styles.listContainer}
        keyExtractor={(blogPost) => blogPost.title}
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.title}</Text>
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
  listItem: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
});
