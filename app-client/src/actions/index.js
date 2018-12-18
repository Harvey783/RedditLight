import posts from '../api/posts';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  DELETE_POST,
  EDIT_POST
} from './types';

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
  const response = await posts.get('/posts');
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const createPost = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await posts.post('/posts', { ...formValues, userId });
  dispatch({ type: CREATE_POST, payload: response.data });
};
