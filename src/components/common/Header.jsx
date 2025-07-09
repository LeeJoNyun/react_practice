import React from "react";
import { HeaderStyle } from "./style";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="inner">
        <h1>
          <Link to="/">
            <img src="./vite.svg" alt="" />
          </Link>
        </h1>
        <Nav />
      </div>
    </HeaderStyle>
  );
};

export default Header;
