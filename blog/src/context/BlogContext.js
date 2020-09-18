import createDataContext from "./createDataContext";

// api
import jsonServer from "../api/jsonServer";

// REDUCER
const blogReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_POSTS":
      return payload;
    // case "ADD_POST":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 99999),
    //       title: payload.title,
    //       content: payload.content,
    //     },
    //   ];
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
const getBlogPosts = (dispatch) => {
  return async () => {
    const res = await jsonServer.get("/blogposts");

    dispatch({
      type: "GET_POSTS",
      payload: res.data,
    });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });
    if (callback) {
      callback();
    }
  };

  //   dispatch({
  //     type: "ADD_POST",
  //     payload: { title, content },
  //   });
};

const updateBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
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
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({
      type: "DELETE_POST",
      payload: id,
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, updateBlogPost, getBlogPosts },
  // INITIAL STATE
  []
);
