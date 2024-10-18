// import React from "react";

import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UserContainer = () => {
  const { user, logOut } = useContext(NavbarContext);
  // console.log(value);
  // return "hello world";
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There , {user?.name}</p>
          <button className="btn" onClick={logOut}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
