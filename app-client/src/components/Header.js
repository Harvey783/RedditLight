import React from "react";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link to="/" className="item">
        React Redux Assessment App
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
