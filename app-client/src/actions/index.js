import posts from '../apis/posts';
import { CREATE_POST, SIGN_IN, SIGN_OUT } from './types';

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

export const createPost = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await posts.post('/posts', { ...formValues, userId });
  dispatch({ type: CREATE_POST, payload: response.data });
  history.push('/');
};
