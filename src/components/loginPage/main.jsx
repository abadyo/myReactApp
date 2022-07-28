// if user success on login

import React, { useState } from "react";

import LoginForm from "./loginForm";

function Logined() {
  const adminLogin = {
    email: "tes@mail.com",
    password: "123",
  };

  // hook
  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  const checkLogin = (detail) => {
    console.log(detail);
    if (
      detail.email === adminLogin.email &&
      detail.password === adminLogin.password
    ) {
      console.log("You are in!");
      setUser({
        username: detail.username,
        email: detail.email,
      });
    } else {
      console.log("Wrong!");
    }
  };

  return (
    <React.Fragment>
      {user.username !== "" ? (
        <div className="container text-center my-5">
          <h1 className="display-4">
            Welcome, <span>{user.username}</span>
          </h1>
        </div>
      ) : (
        <LoginForm checkLogin={checkLogin} />
      )}
    </React.Fragment>
  );
}

export default Logined;
