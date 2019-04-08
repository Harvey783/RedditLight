import React from 'react';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class="ui inverted segment">
      <div class="ui inverted secondary menu">
        <Link to="/">
          <a class="ui red active item">REDDITER</a>
        </Link>
        <a class="item" />
        <div class="right menu">
          <GoogleAuth class="item" />
        </div>
      </div>
    </div>
  );
};

export default Header;
