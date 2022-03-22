import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";
import PostCard from "./PostCard";

function UserPage({ handleRerender }) {
  const [userFound, setUserFound] = useState("");
  const [loadedUser, setLoadedUser] = useState(null);

  const { username } = useParams();
  if (username !== userFound) {
    setUserFound(username);
  }

  let userPosts;
  if (loadedUser) {
    userPosts = loadedUser.posts.map((p) => {
      return <PostCard key={p.id} post={p} handleRerender={handleRerender} />;
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
          <h1 style={{ marginBottom: "10%" }}>{loadedUser.username}</h1>
          {userPosts}
        </>
      )}
    </>
  );
}

export default UserPage;
