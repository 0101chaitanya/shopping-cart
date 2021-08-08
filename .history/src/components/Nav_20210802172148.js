import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <h3>Fake Store</h3>
      <ul className="nav-links">
        <Link className="links" to="/">
          <li>Home</li>
        </Link>
        <Link className="links" to="/shop">
          <li>shop</li>
        </Link>
        <Link className="links" to="/checkout">
          <li>checkout</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Nav;
