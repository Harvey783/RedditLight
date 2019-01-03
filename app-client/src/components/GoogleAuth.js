import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import { clientId } from "./ClientId";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: clientId,
          scope: "email"
        })
        .then(() => {
          // .then automatically invokes arrow function after library successfully initialized
          this.auth = window.gapi.auth2.getAuthInstance();
          // get a reference to the auth object and save it on the component class
          this.onAuthChange(this.auth.isSignedIn.get());
          // passes in the users current authentication status
          this.auth.isSignedIn.listen(this.onAuthChange);
          // When library is finished initializing assigns the AuthInstance to this.auth... Immediately updates the auth state inside the redux store and then waits for a change to the authentitcation status.
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      // Calls the signIn action creator and passes the ID of the signed-in user anytime the authentication status changes according to the Google API.
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
    // Callback helper function accessing the AuthInstance assigned to this.auth.
  };

  onSignOutClick = () => {
    this.auth.signOut();
    // Callback helper function accessing the AuthInstance assigned to this.auth.
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        // When the user is signed in
        <button
          onClick={this.onSignOutClick}
          // onClick event handler calling this.onSignOutClick
          className="mini ui grey google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        // When the user is signed out
        <button
          onClick={this.onSignInClick}
          // onClick event handler calling this.onSignInClick
          className=" mini ui red google button"
        >
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
  // Called with state object. Return an object with the property isSignedIn... Now the value of isSignedIn is going to be either Null, true, or false.
};

export default connect(
  // A connect call with an arguement of mapStateToProps and a second arguement of an object with signIn and signOut.
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
