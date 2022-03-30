import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Home from "./components/Home";
import EnterSite from "./components/EnterSite";
import NewPost from "./components/NewPost";
import UserPage from "./components/UserPage";
import SearchPage from "./components/SearchPage";
import EditProfile from "./components/EditProfile";
import FollowingPage from "./components/FollowingPage";

function App() {
  const [user, setUser] = useState(null);
  const [followedUsers, setFollowedUsers] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/followed_profiles")
      .then((r) => r.json())
      .then((users) => setFollowedUsers(users));
  }, []);

  function handleRerender() {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    fetch("/followed_profiles")
      .then((r) => r.json())
      .then((users) => setFollowedUsers(users));
  }

  function handleFollowedRerender() {
    fetch("/followed_profiles")
      .then((r) => r.json())
      .then((users) => setFollowedUsers(users));
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
              <Route path="/profile/edit">
                <EditProfile user={user} handleRerender={handleRerender} />
              </Route>
              <Route path="/profile">
                <Profile
                  user={user}
                  setUser={setUser}
                  handleRerender={handleRerender}
                />
              </Route>
              <Route path="/welcome">
                <Welcome user={user} />
              </Route>
              <Route path="/following">
                <FollowingPage followedUsers={followedUsers} />
              </Route>
              <Route path="/user/:username">
                <UserPage user={user} handleRerender={handleRerender} />
              </Route>
              <Route path="/search/:searchterm">
                <SearchPage user={user} />
              </Route>
              <Route path="/">
                <Home
                  user={user}
                  followedUsers={followedUsers}
                  setFollowedUsers={setFollowedUsers}
                  handleFollowedRerender={handleFollowedRerender}
                />
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
