// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore. The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()
import postReducer from './postReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  posts: postReducer
});
