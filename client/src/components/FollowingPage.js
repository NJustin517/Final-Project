import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function FollowingPage({ followedUsers }) {
  const history = useHistory();
  let followCards;

  function handleViewProfile(username) {
    history.push(`/user/${username}`);
  }

  if (followedUsers) {
    followCards = followedUsers.map((u) => {
      return (
        <div
          className="card"
          style={{
            width: "30rem",
            marginTop: "15px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="card-body">
            <img
              src={u.profile_picture}
              alt="Profile Picture"
              style={{
                width: "10rem",
                marginTop: "10px",
                marginRight: "10px",
                float: "left",
              }}
            ></img>
            <h5 className="card-title">{u.username}</h5>
            {/* <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p> */}
            <a
              className="btn btn-primary"
              onClick={() => handleViewProfile(u.username)}
            >
              View Profile
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      {followedUsers ? (
        <>{followCards}</>
      ) : (
        <h1 style={{ textAlign: "center" }}>Not Following Anyone!</h1>
      )}
    </>
  );
}

export default FollowingPage;
