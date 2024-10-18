import React, { useState, createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logOut = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logOut }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
