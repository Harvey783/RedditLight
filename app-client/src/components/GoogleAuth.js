import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { clientId } from './ClientId';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: clientId,
          scope: 'email'
        })
        .then(() => {
          // .then automatically invokes arrow function
          // after library successfully initialized
          this.auth = window.gapi.auth2.getAuthInstance();
          // get a reference to the auth object and
          // save it on the component class
          this.onAuthChange(this.auth.isSignedIn.get());
          // passes in the users current authentication status
          this.auth.isSignedIn.listen(this.onAuthChange);
          // When library is finished initializing assigns
          // the AuthInstance to this.auth... Immediately updates
          // the auth state inside the redux store and then waits
          // for a change to the authentitcation status.
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      // Calls the signIn action creator and passes the ID of the
      // signed-in user anytime the authentication status changes
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
    // Callback accessing the AuthInstance assigned to this.auth.
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="inverted mini ui google plus button"
        >
          <i className="white google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignInClick}
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
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
