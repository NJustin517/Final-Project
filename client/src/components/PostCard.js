import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={post.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h6 className="card-title">Username Stand-in</h6>
        <p className="card-text">{post.caption}</p>
        <a className="btn btn-primary">Like Button Stand-in</a>
      </div>
    </div>
  );
}

export default PostCard;
