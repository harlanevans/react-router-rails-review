import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ title, id }) => {
  return (
    <div>
      <p>Title: {title}</p>
      <Link to={`/${id}/posts`}>
        <button>See this blogs posts</button>
      </Link>
    </div>
  );
};
export default Blog;
