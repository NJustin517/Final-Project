import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, useHistory } from "react-router-dom";

function Login({ setLogin, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
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
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-6">
          <input
            type="email"
            className="form-control"
            id="inputEmail3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-6">
          <input
            type="password"
            className="form-control"
            id="inputPassword3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Log in
      </button>
      <br></br>
      <br></br>
      <button
        onClick={() => setLogin(false)}
        className="btn btn-primary btn-sm"
      >
        Don't have an account? Sign up!
      </button>
    </form>
  );
}

export default Login;
