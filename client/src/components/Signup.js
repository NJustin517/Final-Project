import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ setLogin, setUser }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        password_confirmation: passwordConf,
        first_name: firstName,
        last_name: lastName,
        profile_picture: profilePic,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          history.push("/profile");
        });
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="row g-3"
      style={{ marginTop: "4rem", marginLeft: "2rem", marginRight: "2rem" }}
    >
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputUsername4" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="inputUsername4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className="col-12">
        <label htmlFor="inputPassword4" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="col-12">
        <label htmlFor="inputPassword5" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword5"
          value={passwordConf}
          onChange={(e) => setPasswordConf(e.target.value)}
        ></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputFistName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputFirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputLastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputLastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPicture" className="form-label">
          Profile Picture Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="inputPicture"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        ></input>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
        <br></br>
        <br></br>
        <button
          onClick={() => setLogin(true)}
          className="btn btn-primary btn-sm"
        >
          Already have an account? Log In!
        </button>
      </div>
    </form>
  );
}

export default Signup;
