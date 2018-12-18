import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../../actions';

class PostDelete extends React.Component {
  render() {
    return <div>PostDelete</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostDelete);
