import { combineReducers } from 'redux';
// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore. The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import postReducer from './postReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  posts: postReducer
});
