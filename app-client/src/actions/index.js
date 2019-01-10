import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST
} from "./types";
import posts from "../components/api/posts";
import history from "../components/History";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
    // Assigning userId as a payload property allows
    // the action creator to receive ID as an arguement
    // and pass it through to the reducer.
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchPosts = () => async dispatch => {
  const response = await posts.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
  // Returning response.data inside the payload property
  // b/c only concerned with info returned inside the request.
};

export const fetchPost = id => async dispatch => {
  const response = await posts.get(`/posts/${id}`);
  dispatch({ type: FETCH_POST, payload: response.data });
};

export const createPost = formValues => async (dispatch, getState) => {
  // When returning a function from an action creator the function gets
  // called automatically by Redux Thunk with two arguments. The first is the
  // dispatch function, and that second argument is the getState function.
  // getState can be used to grab info from the redux store.
  const { userId } = getState().auth;
  // Destructure userId from getState().auth... Calling getState returns
  // the entire state object. It then accesses the auth state to get the userId.
  const response = await posts.post("/posts", { ...formValues, userId });
  // Combines formValues and userID into one object. ...formValues
  // takes all the key value pairs that have form values and adds it to
  // that object... New posts to the API will then have all the form
  // values as well as the userId of the created post.
  dispatch({ type: CREATE_POST, payload: response.data });
  history.push("/");
};

export const editPost = (id, formValues) => async dispatch => {
  const response = await posts.patch(`/posts/${id}`, formValues);
  dispatch({ type: EDIT_POST, payload: response.data });
  history.push("/");
};

export const deletePost = id => async dispatch => {
  await posts.delete(`/posts/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
  history.push("/");
};
