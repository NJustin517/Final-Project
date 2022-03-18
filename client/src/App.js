import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Home from "./components/Home";
import EnterSite from "./components/EnterSite";

function App() {
  const [user, setUser] = useState("null");

  if (user) {
  }
  return (
    <>
      {user ? (
        <>
          <NavBar />
          <main>
            <Switch>
              <Route path="/enter">
                <EnterSite />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/welcome">
                <Welcome />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </>
      ) : (
        <Switch>
          <Route path="/enter">
            <EnterSite />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
