import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({title, body, id}) => {

  return(
    <div >
      <h2 >Post Title: {title}</h2>
      <p>Post Body: {body}</p>
      <Link to='/'>
      Go Home
      </Link>
    </div>
  )
}
export default Post;