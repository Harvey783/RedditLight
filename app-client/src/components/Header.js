import React from 'react';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary menu">
        <Link to="/" className="ui red active item">
          REDDITER
        </Link>
        <div className="item" />

        <div className="right menu">
          <GoogleAuth className="item" />
        </div>
      </div>
    </div>
  );
};

export default Header;
