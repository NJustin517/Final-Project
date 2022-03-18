import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form>
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3"></input>
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="inputPassword3"
          ></input>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">
        Log in
      </button>
    </form>
  );
}

export default Login;
