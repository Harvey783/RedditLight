import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link to="/" className="item">
        All Posts
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
