import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  EDIT_POST,
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
    // the array is now the key for that object in our new state object.
    case FETCH_POST:
      return { ...state, [action.payload.id]: action.payload };
    // Takes all the properties or key value pairs out of the existing
    // state object and into a new object... Has a key of the post ID
    // and a value of the actual post itself... Take out of the
    // action.payload property the ID and assign a value of action.payload
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_POST:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_POST:
      return _.omit(state, action.payload);
    // Lodash's omit function creates a new object with all
    // the properties from state minus whatever is passed in
    // as the action... action.payload is the key. Payload is the id itself
    default:
      return state;
  }
};
