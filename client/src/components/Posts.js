import React from "react";
import axios from 'axios';
import Post from './Post';

class Posts extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    // state = empty array of posts;
    const { blog_id } = this.props.match.params;
    axios.get(`/api/blogs/${blog_id}/posts`)
    .then( res => {
      this.setState({posts: res.data})
    })
  }
  
  renderPosts() {
    const { posts } = this.state;
    return posts.map(post => {
      return (
        <div>
          <u>This Blogs Posts</u>
          <Post key={post.id} {...post} />
        </div>
      );
    })
  }

  render() {
    const { params: {blog_id} } = this.props.match;
    return (
      <div>
        <h1>This blogs id is {blog_id}</h1>
        {this.renderPosts()}
      </div>
    );
  }
}
export default Posts;
