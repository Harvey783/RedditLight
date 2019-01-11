import postReducer from "./postReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  posts: postReducer
});

// combineReducers turns an object whose values are
// different reducing functions into a single
// reducing function that you can pass to createStore.
//The resulting reducer calls every child reducer,
// and gathers their results into a single state object.
