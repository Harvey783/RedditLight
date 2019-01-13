import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    // Updates the isSignedIn property to true
    // Updates the userId property with a new value from action.payload.
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    // Updates userId to null upon signout
    default:
      return state;
  }
};
