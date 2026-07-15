//Link-page refresh kiye bina navigation karta hai
//useNavigate-function ke through route change karta hai
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";

//AuthContext->authentication data(user, login, logout) yha se milega
import { AuthContext } from "../context/AuthProvider";

//Global search state
import { SearchContext } from "../context/SearchContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const { search, setSearch } = useContext(SearchContext);

  const navigate = useNavigate(); //Programmatically page change karega.

  function handleLogout() {
    logout(); // user remove krega->localStorage.removeItem()

    navigate("/");
  }

  return (
    <nav className="navbar">
      {/* Left Section */}

      <div className="nav-left">
        <Link to="/dashboard">Students</Link>
      </div>

      {/* Center Search */}

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Right Section */}

      <div className="nav-right">
        {user && (
          <>
            <span className="welcome">Welcome, {user.name}</span>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
