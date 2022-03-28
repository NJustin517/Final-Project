import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useParams, useHistory } from "react-router-dom";

function SearchPage({ user }) {
  const [usersSearch, setUsersSearch] = useState("");
  const [loadedUsers, setLoadedUsers] = useState([]);
  const { searchterm } = useParams();
  const history = useHistory();

  if (searchterm !== usersSearch) {
    setUsersSearch(searchterm);
  }

  useEffect(() => {
    fetch(`/search/${searchterm}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoadedUsers(data);
      });
  }, [usersSearch]);

  function handleViewProfile(username) {
    history.push(`/user/${username}`);
  }

  let userCards;
  if (loadedUsers.length > 0) {
    console.log(loadedUsers);
    userCards = loadedUsers.map((u) => {
      return (
        <div
          className="card"
          style={{ width: "30rem", marginTop: "15px", marginLeft: "30rem" }}
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
              href="#"
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
      {loadedUsers.length === 0 ? <h3>No matching users</h3> : <>{userCards}</>}
    </>
  );
}

export default SearchPage;
