import React from "react";
import PostForm from "../PostForm";
import { connect } from "react-redux";
import { createPost } from "../../actions";

class PostCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createPost(formValues);
  };

  render() {
    return (
      <div>
        <h4>Create a Post</h4>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createPost }
)(PostCreate);
