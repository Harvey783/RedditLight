import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  EDIT_POST,
  LIKE_POST,
  DISLIKE_POST,
  DELETE_POST
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    // mapKeys is a function in Lodash that takes an array and
    // returns an object. The keys of this new object are going
    // to be taken from each individual record inside of the array.
    // Whatever the value of ‘id’ is for any given object inside
    // the array is now the key for that object in the new state object.
    case FETCH_POST:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_POST:
      return { ...state, [action.payload.id]: action.payload };
    case LIKE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case DISLIKE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
