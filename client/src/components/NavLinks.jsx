import React from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {
        <ul>
          {links.map((link) => {
            const { text, icon, path } = link;
            const { role } = user;
            if (path === "admin" && role !== "admin") return;
            return (
              <li key={text}>
                <NavLink
                  to={path}
                  className="nav-link"
                  onClick={isBigSidebar ? null : toggleSidebar}
                  end
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default NavLinks;
