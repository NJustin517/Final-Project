import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Home from "./components/Home";
import EnterSite from "./components/EnterSite";
import NewPost from "./components/NewPost";
import UserPage from "./components/UserPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleRerender() {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
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
              <Route path="/profile/new_post">
                <NewPost user_id={user.id} handleRerender={handleRerender} />
              </Route>
              <Route path="/profile">
                <Profile
                  user={user}
                  setUser={setUser}
                  handleRerender={handleRerender}
                />
              </Route>
              <Route path="/welcome">
                <Welcome />
              </Route>
              <Route path="/user/:username">
                <UserPage />
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
            <EnterSite setUser={setUser} />
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
