import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useHistory } from "react-router-dom";

function Comments({ post, user, handleRerender }) {
  const [newComment, setNewComment] = useState("");
  const commentCards = [];
  const history = useHistory();

  function handleProfile(name) {
    history.push(`/user/${name}`);
  }

  if (post.comments.length > 0) {
    post.comments.forEach((c) => {
      commentCards.push(
        <div>
          <b
            style={{ float: "left", marginRight: "15px", cursor: "pointer" }}
            onClick={() => handleProfile(c.username)}
          >
            {c.username}:
          </b>
          <p>{c.comment_text}</p>
          <hr
            style={{
              height: "2px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "gray",
            }}
          ></hr>
        </div>
      );
    });
  }

  function handleAddComment(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        post_id: post.id,
        user_id: user.id,
        username: user.username,
        comment_text: newComment,
        likes: 0,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((c) => {
          console.log(c);
          setNewComment("");
          handleRerender();
        });
      }
    });
  }

  const something = `flush-collapseOne` + post.id;

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + something}
            aria-expanded="false"
            aria-controls={something}
          >
            Comments
          </button>
        </h2>
        <div
          id={something}
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <hr
              style={{
                height: "2px",
                borderWidth: "0",
                color: "gray",
                backgroundColor: "gray",
              }}
            ></hr>
            {commentCards.length > 0 ? commentCards : <p>No Comments!</p>}
            <form className="d-flex" onSubmit={handleAddComment}>
              <input
                className="form-control me-2"
                type="text"
                placeholder="Leave a comment"
                aria-label="Comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Add Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
