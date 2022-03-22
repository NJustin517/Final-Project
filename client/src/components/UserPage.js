import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";

function UserPage() {
  const [searchedUser, setSearchedUser] = useState({ username: "" });

  const { username } = useParams();
  console.log(searchedUser);

  if (username !== searchedUser.username) {
    fetch(`/search/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data !== null) {
          setSearchedUser(data);
        }
      });
  }

  return <h1>UserPage Page</h1>;
}

export default UserPage;
