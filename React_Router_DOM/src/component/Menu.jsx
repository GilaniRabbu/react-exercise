import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item"
            }
            to="/product/123/Juice"
          >
            Product
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-item" : "pending-item"
            }
            to="/skill"
          >
            Skill
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
