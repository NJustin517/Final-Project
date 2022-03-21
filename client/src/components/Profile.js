import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

function Profile({ user, setUser }) {
  function handleLogOut() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const userPosts = user.posts.map((p) => {
    return <PostCard key={p.id} post={p} />;
  });

  return (
    <div>
      <h1>Here's your profile, {user.username}!</h1>
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
