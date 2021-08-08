import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
const Nav = (props) => {
  const { total } = useGlobalContext();
  return (
    <nav>
      <h1>Fake Book Store</h1>
      <ul className="nav-links">
        <li>
          <NavLink className="links" to="/">
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ textDecoration: "none" }}
            className="links"
            to="/checkout"
          >
            <span className="count">
              <span className="material-icons-outlined">shopping_cart</span>
              <span> {total}</span>
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
