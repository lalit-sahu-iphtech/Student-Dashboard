import { useState } from "react";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUserGraduate,
  FaUser,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },

    {
      name: "Students",
      path: "/dashboard/students",
      icon: <FaUserGraduate />,
    },

    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <FaUser />,
    },

    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <>
      {/* Mobile Hamburger */}

      <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)}>
        <FaBars />
      </button>

      {/* Overlay */}

      {mobileOpen && (
        <div className="overlay" onClick={() => setMobileOpen(false)}></div>
      )}

      <aside
        className={`

sidebar

${collapsed ? "collapsed" : ""}

${mobileOpen ? "mobile-show" : ""}

`}
      >
        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <FaBars /> : <FaTimes />}
        </button>

        {!collapsed && <h2 className="sidebar-title">Student Dashboard</h2>}

        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.path} onClick={() => setMobileOpen(false)}>
                <span className="icon">{item.icon}</span>

                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
