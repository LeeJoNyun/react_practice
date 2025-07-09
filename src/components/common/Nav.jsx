import { Link } from "react-router-dom";
import { NavStyle } from "./style";

const Nav = () => {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link to="/product">PRODUCT</Link>
        </li>
        <li>
          <Link to="/todos">TODOS</Link>
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;
