import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts, likePost } from "../../actions";

class PostList extends React.Component {
  constructor(props) {
    super(props);

    // Define the initial state:
    this.state = {
      posts: []
    };
  }

  componentWillReceiveProps(props) {
    if (props.posts.length > 0) {
      this.setState({
        posts: props.posts
      });
    }
  }
  sortLikes = () => {
    const { posts } = this.state;
    posts.sort(function(a, b) {
      return b.likeCount - a.likeCount;
    });
    this.setState({ posts });
  };

  handleClick = beers => {
    // Update state here
    //debugger;
    const sortedPosts = this.state.posts.sort(function(a, b) {
      return b.likeCount - a.likeCount;
    });
    console.log(sortedPosts);
    this.setState({
      posts: sortedPosts
    });
  };

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

  renderSortLikes() {
    if (this.props.isSignedIn) {
      return (
        <div className="middle aligned content">
          <button onClick={this.sortLikes} className="ui mini vk button">
            Sort Likes
          </button>
        </div>
      );
    }
  }

  renderPostList() {
    if (this.props.isSignedIn) {
      return this.props.posts.map(post => {
        return (
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
            <br />
          </div>
        );
      });
    }
  }

  renderPostCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/posts/new" className="ui mini vk button">
            Create Post
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderSortLikes()}
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
  { fetchPosts, likePost }
)(PostList);
