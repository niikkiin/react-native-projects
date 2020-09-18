import React, { useContext } from "react";

// context
import { Context as BlogContext } from "../context/BlogContext";

// components
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation: { navigate } }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      handleSubmit={(title, content) => {
        addBlogPost(title, content, () => navigate("Index"));
      }}
    />
  );
};

export default CreateScreen;
