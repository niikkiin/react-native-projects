import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Context as BlogContext } from "../context/BlogContext";

// icon
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation: { navigate } }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blog Posts</Text>
      <FlatList
        style={styles.listContainer}
        keyExtractor={(blogPost) => blogPost.title}
        data={state}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigate("Show", { id: item.id })}>
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation: { navigate } }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={styles.headerRight}
        onPress={() => navigate("Create")}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
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
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
  },
  listItem: {},
  icon: {
    fontSize: 25,
  },
  headerRight: {
    marginRight: 10,
  },
});
