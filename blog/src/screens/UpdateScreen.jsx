import React, { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const UpdateScreen = ({ navigation: { navigate }, navigation }) => {
  
  const { state, addBlogPost } = useContext(BlogContext);
  const id = navigation.getParam("id");
  
  const blogPost = state.find((blogPost) => blogPost.id === id);
  
  
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Post - {id}</Text>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            style={styles.input}
            value={title}
            name="title"
            onChangeText={(e) => setTitle(e)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Content:</Text>
          <TextInput
            style={styles.input}
            value={content}
            name="content"
            onChangeText={(e) => setContent(e)}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title="Add New Blog Post"
            onPress={() => {
              addBlogPost(title, content, () => {
                navigate("Index");
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontSize: 25,
  },
  formContainer: {
    marginVertical: 15,
  },
  label: {
    fontSize: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    fontSize: 20,
    backgroundColor: "#dedfdf",
    height: 50,
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
  },
  btnContainer: {
    marginVertical: 20,
  },
});
