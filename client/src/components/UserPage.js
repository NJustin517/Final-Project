import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, useParams } from "react-router-dom";

function UserPage() {
  const [userFound, setUserFound] = useState("");
  const [loadedUser, setLoadedUser] = useState(null);

  const { username } = useParams();
  if (username !== userFound) {
    setUserFound(username);
  }

  useEffect(() => {
    fetch(`/search/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoadedUser(data);
      });
  }, [userFound]);

  // useEffect(() => {
  //   if (loadedUser) {
  //     setUserFound(true);
  //   } else {
  //     setUserFound(false);
  //   }
  // }, [loadedUser]);

  // function getUser() {
  //   fetch(`/search/${username}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setLoadedUser(data);
  //     });
  // }

  // getUser();

  return (
    <>
      {loadedUser === null ? (
        <h3>User not found</h3>
      ) : (
        <h3>{loadedUser.username} found!</h3>
      )}
    </>
  );
}

export default UserPage;
