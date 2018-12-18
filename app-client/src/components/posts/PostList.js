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
          <Link to={`/posts/edit/${post.id}`}>
            <i class="grey edit outline icon" />
          </Link>
          <Link to={`/posts/delete/${post.id}`}>
            <i class="red x icon" />
          </Link>
        </div>
      );
    }
  }

  render() {
    return <div>PostList</div>;
  }
}

export default connect(
  null,
  { fetchPosts }
)(PostList);
