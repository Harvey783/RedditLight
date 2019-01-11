import React from "react";
import Modal from "../Modal";
import history from "../History";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../../actions";
import { Link } from "react-router-dom";

class PostDelete extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      // Trying to place some sibling elements next to
      // each other but wrapping them in a single outside
      // <div> tag throws off styling... React Fragments
      // return multiple elements or assigned multiple
      // elements to a single variable, and are rendered
      // without any change to the HTML
      <React.Fragment>
        <button
          onClick={() => this.props.deletePost(id)}
          // An arrow function is passed into the
          // onClick hadler. Calls deletePost with an ID
          // passing a reference to a function off to
          // onClick allowing the ID of the deleted post to
          // be passed as well.
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    // Displays the title of the post to be deleted
    if (this.props.post) {
      return `Delete ${this.props.post.title}???`;
    }
  }

  render() {
    return (
      <Modal
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
        // onDismiss is for when a user clicks
        // outside the Modal
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
  // Called with both the state from the redux store
  // and a second argument of ownProps. ownProps is the
  // exact same props object that is going to be passed
  // to the component... Use ownPops to look at props.match
  // and pull out the ID of the required post... Returns an
  // object with the key of post. State.posts is an object
  // containing all the different posts where all the keys
  // are the IDs of each post.
};

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostDelete);
