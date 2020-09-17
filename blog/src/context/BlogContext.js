import createDataContext from "./createDataContext";


// REDUCER
const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

// ACTIONS
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({
      type: "ADD_POST",
    });
  }
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  // INITIAL STATE  
  []
);
