import createDataContext from "./createDataContext";

// REDUCER
const blogReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: payload.title,
          content: payload.content,
        },
      ];
    case "UPDATE_POST":
      return state.map((blogPost) => {
        return blogPost.id === payload.id ? payload : blogPost;
        // if (blogPost.id === payload.id) {
        //   return payload;
        // } {
        //   return blogPost;
        // }
      });
    case "DELETE_POST":
      return state.filter((blogPost) => blogPost.id !== payload);
    default:
      return state;
  }
};

// ACTIONS
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({
      type: "ADD_POST",
      payload: { title, content },
    });
    if (callback) {
      callback();
    }
  };
};

const updateBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "UPDATE_POST",
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({
      type: "DELETE_POST",
      payload: id,
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, updateBlogPost },
  // INITIAL STATE
  [{ id: 1, title: "test post", content: "hello test content" }]
);
