import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
const Nav = (props) => {
  const { total } = useGlobalContext();
  return (
    <nav>
      <h1>Fake Book Store</h1>
      <ul className="nav-links">
        <li>
          <Link className="links" to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link className="links" to="/checkout">
            <span>
              checkout
              <span> {total}</span> items
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
