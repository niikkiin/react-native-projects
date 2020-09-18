import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context as BlogContext } from "../context/BlogContext";

const UpdateScreen = ({ navigation: { pop }, navigation }) => {
  const { state, updateBlogPost } = useContext(BlogContext);
  const id = navigation.getParam("id");

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      handleSubmit={(title, content) => {
        updateBlogPost(id, title, content, () => pop());
      }}
    />
  );
};

export default UpdateScreen;
