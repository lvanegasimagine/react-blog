import React from "react";
import { Link } from "react-router-dom";

import post from '../data/posts';

const BlogScreen = () => {
  return (
    <div className="">
      <h2>blog</h2>
      <ul>
        { post.map(item => <li key={item.id}><Link to={`/post/${item.id}`}>{item.titulo}</Link></li>) }
      </ul>
    </div>
  );
};

export default BlogScreen;
