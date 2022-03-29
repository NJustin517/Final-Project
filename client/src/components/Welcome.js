import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to Skate-Space!</h1>
      <img
        src="https://imgs.search.brave.com/dMi4pgHvkcc_N70o5q0_EJ3E-JCYIa4ZT9D_poO91gY/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly90aGVn/YWRnZXRmbG93LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NS8wOC9IYW5kY3Jh/ZnRlZC1Xb29kZW4t/U2thdGVib2FyZC1i/eS1NdXJrc2xpLTA0/LmpwZw"
        alt="Inner Peace"
        className="welcome_image"
      ></img>
      <Link
        to="/enter"
        className="btn btn-primary btn-lg login_btn"
        style={{ marginBottom: "20px", marginLeft: "75rem" }}
      >
        Login/Signup
      </Link>
    </div>
  );
}

export default Welcome;
