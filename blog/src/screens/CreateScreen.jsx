import React, { useState, useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation: { navigate }}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Post</Text>

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
                navigate('Index');
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateScreen;

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
