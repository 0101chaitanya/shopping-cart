import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
  const [count, setCount] = useState(0);

  return (
    <nav>
      <h1>Fake Book Store</h1>
      <ul className="nav-links">
        <li>
          <Link className="links" to="/">
            <span>Home</span>
          </Link>
          <Link className="links" to="/shop">
            <span count={count} setCount={setCount}>
              shop
            </span>
          </Link>
        </li>
        <li>
          <Link className="links" to="/checkout">
            <span>
              checkout<span className="count"> {count}</span> items
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
