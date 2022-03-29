import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import PostCard from "./PostCard";

function UserPage({ handleRerender, user }) {
  const [userFound, setUserFound] = useState("");
  const [loadedUser, setLoadedUser] = useState(null);
  const [found, setFound] = useState(false);
  console.log(user);

  useEffect(() => {
    const find = user.follows.find((f) => {
      if (loadedUser) {
        return f.follow_id === loadedUser.id;
      }
    });
    if (find) {
      setFound(true);
    }
  }, [loadedUser]);

  const { username } = useParams();
  if (username !== userFound) {
    setUserFound(username);
  }

  let userPosts;
  if (loadedUser) {
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
    fetch(`/user/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoadedUser(data);
      });
  }, [userFound]);

  function handleClick() {
    if (!found) {
      fetch("/follows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: user.id, follow_id: loadedUser.id }),
      })
        .then((r) => r.json())
        .then((res) => {
          setFound(!found);
          handleRerender();
        });
    } else {
      const follow = user.follows.find((f) => f.follow_id === loadedUser.id);
      fetch(`/follows/${follow.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setFound(!found);
          handleRerender();
        }
      });
    }
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
              width: "10rem",
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
            onClick={handleClick}
          >
            {found ? "Unfollow" : "Follow"}
          </button>
          {userPosts}
        </>
      )}
    </>
  );
}

export default UserPage;
