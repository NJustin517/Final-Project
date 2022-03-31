import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function EditProfile({ user, handleRerender }) {
  const [username, setUsername] = useState(user.username);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [profilePic, setProfilePic] = useState(user.profile_picture);
  const history = useHistory();

  function handleUpdateProfile(e) {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        first_name: firstName,
        last_name: lastName,
        profile_picture: profilePic,
      }),
    }).then((res) => {
      if (res.ok) {
        handleRerender();
        history.push("/profile");
      }
    });
  }

  return (
    <>
      <form
        onSubmit={handleUpdateProfile}
        style={{ marginTop: "4rem", marginLeft: "2rem" }}
      >
        <div className="row mb-3">
          <label htmlFor="inputImage" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="inputImage"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputImage" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="inputImage"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputImage" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="inputImage"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputImage" className="col-sm-2 col-form-label">
            Profile Picture URL
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="inputImage"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
            ></input>
          </div>
        </div>
        {profilePic !== "" ? (
          <>
            <h4>Image Preview</h4>
            <img
              src={profilePic}
              alt="pic to be posted"
              style={{ width: "20%" }}
            ></img>
          </>
        ) : null}
        <br></br>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
}

export default EditProfile;
