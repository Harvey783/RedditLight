import _ from "lodash";
import React from "react";
import PostForm from "../PostForm";
import { connect } from "react-redux";
import { fetchPost, editPost } from "../../actions";

class PostEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
    // Passes in the ID to fetchPost with
    // this.props.match.params.id
  }

  onSubmit = formValues => {
    this.props.editPost(this.props.match.params.id, formValues);
    // PostForm callback passing in the ID and values to editPost
  };

  render() {
    return (
      <div>
        <PostForm
          initialValues={_.pick(this.props.post, "title", "description")}
          // Passes in the redux-form prop, initialValues, to PostForm.
          // _.pick selects the post object's property values to pass to
          // initialValues. Submitting the form calls the onSubmit
          // callback handler
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
  // Selects the target post by its ID in the state.posts
  // object via ownProps.match.params.id. Assigns that
  // to the post property inside this object and then
  // returns it from mapStateToProps. The props object
  // then contains the post for edit.
};

export default connect(
  mapStateToProps,
  { fetchPost, editPost }
)(PostEdit);
