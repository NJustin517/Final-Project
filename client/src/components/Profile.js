import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Profile({ user, setUser }) {
  function handleLogOut() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

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
      <img
        src="https://imgs.search.brave.com/8mUbDIyY_-F-3CzUs45bscKbO-0mBWSo4Bml45F_6fA/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/em1xMEJ3d2VENEpO/eWUxTTlFVDhRSGFM/SCZwaWQ9QXBp"
        alt="Inner Peace"
        style={{ width: "100%" }}
      ></img>
    </div>
  );
}

export default Profile;
