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
    callback();
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
  { addBlogPost, deleteBlogPost },
  // INITIAL STATE
  [{ id: 1, title: "test post", content: "hello test content" }]
);
