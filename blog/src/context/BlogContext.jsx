import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, { title: `Blog Post #${state.length}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPost, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({
      type: "ADD_POST",
    });
  };

  return (
    <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
