import _ from 'lodash';
import React from 'react';
import PostForm from '../PostForm';
import { connect } from 'react-redux';
import { fetchPost, editPost } from '../../actions';

class PostEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editPost(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <PostForm
          initialValues={_.pick(this.props.post, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchPost, editPost }
)(PostEdit);
