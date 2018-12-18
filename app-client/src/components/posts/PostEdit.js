import React from 'react';
import { connect } from 'react-redux';

class PostEdit extends React.Component {
  render() {
    return <div>PostEdit</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(PostEdit);
