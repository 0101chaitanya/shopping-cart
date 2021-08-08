import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <h1>Fake Store</h1>
      <ul className="nav-links">
        <li>
          <Link className="links" to="/">
            <li>Home</li>
          </Link>
          <Link className="links" to="/shop">
            <li>shop</li>
          </Link>
        </li>
        <li>
          <Link className="links" to="/checkout">
            <li>checkout</li>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
