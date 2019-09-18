import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Blog from './Blog';

class Blogs extends React.Component {
  state = { blogs: [] };

  componentDidMount() {
    axios.get("/api/blogs").then(res => {
      this.setState({ blogs: res.data });
    });
  }

  renderBlogs = () => {
    const { blogs } = this.state;
    return blogs.map(blog => {
      return <Blog key={blog.id} {...blog} />;
    });
  };

  render() {
    return (
      <div>
        <h1>Blogs: {this.renderBlogs()}</h1>
        <br />
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
  }
}

export default Blogs;
