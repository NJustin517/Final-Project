import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
