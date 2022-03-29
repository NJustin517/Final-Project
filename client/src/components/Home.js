import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

function Home({ user }) {
  const [followedUsers, setFollowedUsers] = useState(null);
  const followedPosts = [];
  let followedCards;

  useEffect(() => {
    fetch("/followed_profiles")
      .then((r) => r.json())
      .then((users) => setFollowedUsers(users));
  }, []);

  function handleLikeRerender() {
    fetch("/followed_profiles")
      .then((r) => r.json())
      .then((users) => setFollowedUsers(users));
  }

  if (followedUsers) {
    followedUsers.forEach((user) => {
      user.posts.forEach((p) => followedPosts.push(p));
    });
  }

  if (followedPosts.length > 0) {
    const sorted = followedPosts.slice().sort((a, b) => b.id - a.id);
    followedCards = sorted.map((p) => {
      return (
        <PostCard
          key={p.id}
          post={p}
          handleRerender={handleLikeRerender}
          user={user}
        />
      );
    });
  }

  return (
    <>
      {followedUsers === null || followedUsers.length === 0 ? (
        <h2>
          Not following anyone! Search for users to follow them and fill your
          feed!
        </h2>
      ) : (
        <>{followedCards}</>
      )}
    </>
  );
}

export default Home;
