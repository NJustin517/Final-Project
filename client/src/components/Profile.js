import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

function Profile({ user, setUser, handleRerender }) {
  function handleLogOut() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const userPosts = user.posts.map((p) => {
    return (
      <PostCard
        key={p.id}
        post={p}
        handleRerender={handleRerender}
        user={user}
      />
    );
  });

  console.log(userPosts);

  return (
    <div>
      <Link
        to="/profile/new_post"
        className="btn btn-primary"
        style={{ float: "right", marginTop: "15px", marginRight: "30px" }}
      >
        New Post +
      </Link>
      <img
        src={user.profile_picture}
        alt="Profile Picture"
        style={{
          width: "10rem",
          marginTop: "10px",
          marginRight: "10px",
          marginLeft: "1rem",
          float: "left",
        }}
      ></img>
      <h1>{user.username}</h1>
      <Link
        to="/profile/edit"
        className="btn btn-primary"
        style={{ marginBottom: "5px" }}
      >
        Edit Profile
      </Link>
      <br></br>
      <button onClick={handleLogOut} type="button" className="btn btn-danger">
        Log Out
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {user.posts.length !== 0 ? (
        userPosts
      ) : (
        <h1 style={{ textAlign: "center" }}>There are no posts!</h1>
      )}
    </div>
  );
}

export default Profile;
