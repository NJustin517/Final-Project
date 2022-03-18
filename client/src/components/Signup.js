import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Email
        </label>
        <input type="email" class="form-control" id="inputEmail4"></input>
      </div>
      <div class="col-md-6">
        <label for="inputUsername4" class="form-label">
          Username
        </label>
        <input type="text" class="form-control" id="inputUsername4"></input>
      </div>
      <div class="col-12">
        <label for="inputPassword4" class="form-label">
          Password
        </label>
        <input type="password" class="form-control" id="inputPassword4"></input>
      </div>
      <div class="col-12">
        <label for="inputPassword5" class="form-label">
          Confirm Password
        </label>
        <input type="password" class="form-control" id="inputPassword5"></input>
      </div>
      <div class="col-md-6">
        <label for="inputFistName" class="form-label">
          First Name
        </label>
        <input type="text" class="form-control" id="inputFirstName"></input>
      </div>
      <div class="col-md-6">
        <label for="inputLastName" class="form-label">
          Last Name
        </label>
        <input type="text" class="form-control" id="inputLastName"></input>
      </div>
      <div class="col-md-6">
        <label for="inputPicture" class="form-label">
          Profile Picture Image URL
        </label>
        <input type="text" class="form-control" id="inputPicture"></input>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">
          Create Account
        </button>
      </div>
    </form>
  );
}

export default Signup;
