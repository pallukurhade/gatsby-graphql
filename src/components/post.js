import React from "react"
import { Link } from "gatsby";
import './post.css';

const Post = ({ title, body, path }) => (
  <div className="post">
    <h3 className="post-title">{ title }</h3>
    <p className="post-description">{ body }</p>
    <Link className="Button ButtonPrimary  css-57q1e7" to={ path }>Read more</Link>
  </div>
);

export default Post;