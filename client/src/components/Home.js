import React, { useEffect } from "react";
import PostCard from "./PostCard";

function Home({
  user,
  followedUsers,
  setFollowedUsers,
  handleFollowedRerender,
}) {
  const followedPosts = [];
  let followedCards;

  useEffect(() => {
    handleFollowedRerender();
  }, []);

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
          handleRerender={handleFollowedRerender}
          user={user}
        />
      );
    });
  }

  return (
    <>
      {followedUsers === null || followedUsers.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
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
