import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts, likePost, fetchPost, editPost } from "../../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
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

  renderPostList() {
    if (this.props.isSignedIn) {
      return this.props.posts.map(post => {
        return (
          // Calls renderIconLinks and passes the post
          // currently being iterated over
          <div className="item" key={post.id}>
            {this.renderIconLinks(post)}

            <div className="content">
              <div className="header">{post.title}</div>
              <div className="description">{post.description}</div>
              <br />
              <button
                onClick={() => this.props.likePost(post)}
                className="mini ui basic blue button"
              >
                <i className="heart icon" />
                {post.likeCount}
              </button>
            </div>
          </div>
        );
      });
    }
  }

  renderPostCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
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

const mapStateToProps = (state, ownProps) => {
  return {
    posts: Object.values(state.posts),
    post: state.posts[ownProps.match.params.id],
    // Returns a object with a posts prop containg all the posts.
    // State.posts is passed into the Object.values, which is a JS
    // function that takes an object's values and inserts them into
    // an array.
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts, likePost, fetchPost, editPost }
)(PostList);
