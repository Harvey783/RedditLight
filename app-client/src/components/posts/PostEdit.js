import _ from "lodash";
import React from "react";
import PostForm from "../PostForm";
import { connect } from "react-redux";
import { fetchPost, editPost } from "../../actions";

class PostEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
    // When component mounts fetchPost and pass
    // in its ID with this.props.match.params.id
  }

  onSubmit = formValues => {
    this.props.editPost(this.props.match.params.id, formValues);
    // PostForm callback
  };

  render() {
    return (
      <div>
        <PostForm
          initialValues={_.pick(this.props.post, "title", "description")}
          // Pass in the redux-form prop, initialValues, to PostForm...
          // _.pick selects values of the properties from the post
          // object to pass down as initial values... Renders an initialValuees
          // object containing the post's title and description property values.
          // Submitting the form calls the onSubmit callback handler
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
  // Get posts through state object. The post property
  // refers to an object where the keys of that object
  // are the IDs of all the posts... Selects the target
  // post out of the object that contains all of the posts
  // inside the redux store. Assigns that to the post
  // property inside this object and then returns it from
  // mapStateToProps. The props object then contains the post for edit.
};

export default connect(
  mapStateToProps,
  { fetchPost, editPost }
)(PostEdit);
