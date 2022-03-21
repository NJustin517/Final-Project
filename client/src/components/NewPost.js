import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function NewPost({ user_id, handleRerender }) {
  const [imageURL, setImageURL] = useState("");
  const [caption, setCaption] = useState("");

  function handleSubmitPost(e) {
    e.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user_id,
        image: imageURL,
        likes: 0,
        caption,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data);
          setImageURL("");
          setCaption("");
          handleRerender();
        });
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmitPost}>
        <div className="row mb-3">
          <label htmlFor="inputImage" className="col-sm-2 col-form-label">
            Image URL
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="inputImage"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputCaption" className="col-sm-2 col-form-label">
            Caption
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="inputCaption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            ></input>
          </div>
        </div>
        {imageURL != "" ? (
          <>
            <h4>Image Preview</h4>
            <img
              src={imageURL}
              alt="picture to be posted"
              style={{ width: "20%" }}
            ></img>
          </>
        ) : null}
        <br></br>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default NewPost;
