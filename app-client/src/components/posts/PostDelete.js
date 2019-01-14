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
      // Fragments let you group a list of
      // children without adding extra
      // nodes to the DOM. Needed so Delete
      // and Cancel links remain inline.
      <React.Fragment>
        <button
          onClick={() => this.props.deletePost(id)}
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
        // onDismiss for when a user clicks
        // outside the Modal
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostDelete);
