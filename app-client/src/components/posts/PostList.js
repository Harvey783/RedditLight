import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, likePost } from '../../actions';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: false
    };
  }

  sortLikes = () => {
    this.setState(() => ({
      posts: this.props.posts
        .concat()
        .sort((a, b) => b.likeCount - a.likeCount),
      sorted: true
    }));
  };

  handleSortLikes = post => {
    this.props.likePost(post).then(() => {
      if (this.state.sorted) {
        this.sortLikes();
      }
    });
  };

  renderSortLikes() {
    if (this.props.isSignedIn) {
      return (
        <div className="item">
          <button onClick={this.sortLikes} className="ui mini vk button">
            Most Liked
          </button>
        </div>
      );
    }
  }

  renderPostList() {
    if (this.props.isSignedIn) {
      const posts = this.state.sorted ? this.state.posts : this.props.posts;
      return posts.map(post => {
        return (
          <div className="item" key={post.id}>
            {this.renderIconLinks(post)}
            <div className="content">
              <div className="header">{post.title}</div>
              <div className="description">{post.description}</div>
              <br />
              <button
                onClick={() => this.handleSortLikes(post)}
                className="mini ui basic blue button"
              >
                <i className="heart icon" />
                {post.likeCount}
              </button>
            </div>
            <br />
          </div>
        );
      });
    }
  }

  renderPostCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/posts/new" className="ui mini vk button">
            New Post
          </Link>
        </div>
      );
    }
  }

  renderIconLinks(post) {
    if (post.userId === this.props.currentUserId) {
      return (
        <div className="middle aligned right floated content">
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

  render() {
    console.log(this.props.posts);
    return (
      <div>
        {this.renderSortLikes()}
        <br />
        <div className="ui relaxed celled list">{this.renderPostList()}</div>
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
  { fetchPosts, likePost }
)(PostList);
