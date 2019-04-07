import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, likePost, dislikePost } from '../../actions';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: 'none'
    };
  }

  sortLikes = () => {
    if (this.state.sortType === 'desc') {
      return this.props.posts
        .concat()
        .sort((a, b) => b.likeCount - a.likeCount);
    } else {
      return this.props.posts
        .concat()
        .sort((a, b) => a.likeCount - b.likeCount);
    }
  };

  handleSortLikes = post => {
    this.props.likePost(post).then(() => {
      if (this.state.sorted) {
        this.sortLikes();
      }
    });
  };

  handleSortDislikes = post => {
    this.props.dislikePost(post).then(() => {
      if (this.state.sorted) {
        this.sortLikes();
      }
    });
  };

  renderSortLikes() {
    if (this.props.isSignedIn && this.state.sortType === 'desc') {
      return (
        <div className="item">
          <button
            onClick={() => this.setState({ sortType: 'asc' })}
            className="ui mini vk button"
          >
            Least Liked
          </button>
        </div>
      );
    } else {
      return (
        <div className="item">
          <button
            onClick={() => this.setState({ sortType: 'desc' })}
            className="ui mini vk button"
          >
            Most Liked
          </button>
        </div>
      );
    }
  }

  renderPostList() {
    if (this.props.isSignedIn) {
      let postsToRender;

      if (this.state.sortType === 'none') {
        postsToRender = this.props.posts;
      } else {
        postsToRender = this.sortLikes();
      }

      return postsToRender.map(post => {
        return (
          <div className="content" key={post.id}>
            <h4 className="title">{post.title}</h4>
            <div className="description">{post.description}</div>

            <a className="likes" href="">
              {post.likeCount} likes
            </a>

            <span className="action">
              <i
                onClick={() => this.handleSortLikes(post)}
                className="white thumbs up icon"
              />
            </span>
            <span className="action">
              <i
                onClick={() => this.handleSortDislikes(post)}
                className="white thumbs down icon"
              />
            </span>
            <span className="action">
              <Link to={`/posts/${post.id}/edit`}>
                <i className="grey edit outline icon" />
              </Link>
            </span>
            <span className="action">
              <Link to={`/posts/${post.id}/delete`}>
                <i className="grey x icon" />
              </Link>
            </span>
          </div>
        );
      });
    }
  }

  // renderIconLinks(post) {
  //   if (post.userId === this.props.currentUserId) {
  //     return (
  //       <div className="middle aligned right floated content">
  //         <Link to={`/posts/${post.id}/edit`}>
  //           <i className="grey edit outline icon" />
  //         </Link>
  //         <Link to={`/posts/${post.id}/delete`}>
  //           <i className="grey x icon" />
  //         </Link>
  //       </div>
  //     );
  //   }
  // }

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

  render() {
    return (
      <div>
        <div>{this.renderSortLikes()}</div>
        <br />
        <div>{this.renderPostList()}</div>
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
  { fetchPosts, likePost, dislikePost }
)(PostList);
