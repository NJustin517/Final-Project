import React, { useState } from "react";
import Comments from "./Comments";

function PostCard({ post, handleRerender, user }) {
  const [likes, setLikes] = useState(post.like_count);
  const likedPost = user.likes.find((like) => {
    return like.post_id === post.id;
  });

  console.log(post);

  function handleDeletePost() {
    fetch(`/posts/${post.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        handleRerender();
      }
    });
  }

  function handleLike() {
    if (!likedPost) {
      fetch("/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          post_id: post.id,
        }),
      }).then((res) => {
        if (res.ok) {
          fetch(`/posts/${post.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              like_count: likes + 1,
            }),
          }).then((res) => {
            if (res.ok) {
              setLikes(likes + 1);
              handleRerender();
            }
          });
        }
      });
    } else {
      fetch(`/likes/${likedPost.id}`, {
        method: "DELETE",
      }).then((data) => {
        fetch(`/posts/${post.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            like_count: likes - 1,
          }),
        }).then((res) => {
          if (res.ok) {
            setLikes(likes - 1);
            handleRerender();
          }
        });
      });
    }

    // fetch(`/posts/${post.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     likes: likes + 1,
    //   }),
    // }).then((res) => {
    //   if (res.ok) {
    //     setLikes(likes + 1);
    //     handleRerender();
    //   }
    // });
  }

  return (
    <div
      className="card"
      style={{
        width: "45rem",
        marginTop: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "2rem",
      }}
    >
      <img src={post.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h6 className="card-title">{post.username}</h6>
        <p className="card-text">{post.caption}</p>
        <a className="btn btn-primary" onClick={handleLike}>
          {likedPost ? "♥" : "♡"}
        </a>
        {post.username === user.username ? (
          <a
            className="btn btn-danger"
            onClick={handleDeletePost}
            style={{ float: "right" }}
          >
            Delete
          </a>
        ) : (
          <p></p>
        )}
        <p>{post.like_count} Likes</p>
        <Comments post={post} user={user} handleRerender={handleRerender} />
      </div>
    </div>
  );
}

// ♥ ♡

export default PostCard;
