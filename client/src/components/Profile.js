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
    return <PostCard key={p.id} post={p} handleRerender={handleRerender} />;
  });

  return (
    <div>
      <img
        src={user.profile_picture}
        alt="Profile Picture"
        style={{
          width: "10%",
          marginTop: "10px",
          marginRight: "10px",
          float: "left",
        }}
      ></img>
      <h1>{user.username}</h1>
      <button type="button" className="btn btn-primary">
        Edit Profile
      </button>
      <br></br>
      <br></br>
      <button onClick={handleLogOut} type="button" className="btn btn-primary">
        Log Out
      </button>
      <br></br>
      <br></br>
      <Link to="/profile/new_post" className="btn btn-primary">
        New Post
      </Link>
      <br></br>
      <br></br>
      {user.posts.length !== 0 ? userPosts : <h1>There are no posts!</h1>}
    </div>
  );
}

export default Profile;
