import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import PostCard from "./PostCard";

function UserPage({ handleRerender, user }) {
  const [userFound, setUserFound] = useState("");
  const [loadedUser, setLoadedUser] = useState(null);
  console.log(user);

  const { username } = useParams();
  if (username !== userFound) {
    setUserFound(username);
  }

  let userPosts;
  if (loadedUser) {
    console.log(loadedUser);
    userPosts = loadedUser.posts.map((p) => {
      return (
        <PostCard
          key={p.id}
          post={p}
          handleRerender={handleRerender}
          user={user}
        />
      );
    });
  }

  useEffect(() => {
    fetch(`/search/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoadedUser(data);
      });
  }, [userFound]);

  function handleFollow() {
    fetch("/follows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.id, follow_id: loadedUser.id }),
    })
      .then((r) => r.json())
      .then((res) => console.log(res));
  }

  function handleUnfollow() {
    const follow = user.follows.find((f) => f.follow_id === loadedUser.id);
    fetch(`/follows/${follow.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        console.log("Unfollowed");
      }
    });
  }

  return (
    <>
      {loadedUser === null ? (
        <h3>User not found</h3>
      ) : (
        <>
          <img
            src={loadedUser.profile_picture}
            alt="Profile Picture"
            style={{
              width: "10%",
              marginTop: "10px",
              marginRight: "10px",
              float: "left",
            }}
          ></img>
          <h1>{loadedUser.username}</h1>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginBottom: "6%" }}
            onClick={handleFollow}
          >
            Follow
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginBottom: "6%" }}
            onClick={handleUnfollow}
          >
            Unfollow
          </button>
          {userPosts}
        </>
      )}
    </>
  );
}

export default UserPage;
