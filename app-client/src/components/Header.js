import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link to="/" className="item">
        PostIT
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Posts
        </Link>
      </div>
    </div>
  );
};

export default Header;
