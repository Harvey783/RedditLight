import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderIconLinks(post) {
    if (post.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/posts/${post.id}/edit`}>
            <i className="grey edit outline icon" />
          </Link>
          <Link to={`/posts/${post.id}/delete`}>
            <i className="red x icon" />
          </Link>
        </div>
      );
    }
  }

  renderPostList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          {this.renderIconLinks(post)}
          <i className="large middle aligned thumbtack icon" />
          <div className="content">
            <div className="header">{post.title}</div>
            <div className="description">{post.description}</div>
          </div>
        </div>
      );
    });
  }

  renderPostCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/posts/new" className="ui mini primary button">
            Create Post
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <br />
        <div className="ui celled list">{this.renderPostList()}</div>
        {this.renderPostCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
