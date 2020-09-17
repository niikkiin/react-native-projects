import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

// icon
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);

  const id = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {blogPost.title} - {id}
      </Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Update", { id: navigation.getParam("id") })
        }
        style={styles.headerRight}
      >
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontSize: 25,
  },
  content: {
    backgroundColor: "#dedfdf",
    minHeight: 300,
    padding: 10,
    marginVertical: 15,
    borderRadius: 5,
  },
  headerRight: {
    marginRight: 15,
  },
});
