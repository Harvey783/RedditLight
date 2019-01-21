import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  DELETE_POST,
  LIKE_POST,
  EDIT_POST
} from "./types";
import posts from "../components/api/posts";
import history from "../components/History";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
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
};

export const fetchPost = id => async dispatch => {
  const response = await posts.get(`/posts/${id}`);
  dispatch({ type: FETCH_POST, payload: response.data });
};

export const createPost = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  // Destructure userId from getState().auth... Calling getState returns
  // the entire state object. It then accesses the auth state to get the userId.
  const response = await posts.post("/posts", { ...formValues, userId });
  dispatch({ type: CREATE_POST, payload: response.data });
  history.push("/");
};

export const editPost = (id, formValues) => async dispatch => {
  const response = await posts.patch(`/posts/${id}`, formValues);
  dispatch({ type: EDIT_POST, payload: response.data });
  history.push("/");
};

export const likePost = post => async dispatch => {
  let p = { ...post };
  p.likeCount++;
  debugger;
  const response = await posts.patch(`/posts/${p.id}`, { post: p });
  dispatch({ type: LIKE_POST, payload: response.data });
  history.push("/");
};

export const deletePost = id => async dispatch => {
  await posts.delete(`/posts/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
  history.push("/");
};
