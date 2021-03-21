import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";
import { ReactComponent as Logo } from "../../assets/bakery.svg";

function Header() {
  return (
    <div className="menu">
      <div className="title">BAKERY</div>
      <div className="logo-header">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/shop">Shop</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
