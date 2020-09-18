import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const BlogPostForm = ({ handleSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
            title="Save Blog Post"
            onPress={() => handleSubmit(title, content)}
          />
        </View>
      </View>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

export default BlogPostForm;

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
