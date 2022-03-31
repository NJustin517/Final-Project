import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function EnterSite({ setUser }) {
  const [login, setLogin] = useState(true);

  return (
    <>
      {login ? (
        <Login setLogin={setLogin} setUser={setUser} />
      ) : (
        <Signup setLogin={setLogin} setUser={setUser} />
      )}
    </>
  );
}

export default EnterSite;
