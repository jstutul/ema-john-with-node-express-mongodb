import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";
// import useFirebase from "./../../hooks/useFirebase";
import useAuth from "./../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        {user?.email && (
          <span style={{ color: "white" }}>Hello {user.displayName}</span>
        )}

        {user.email ? (
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
