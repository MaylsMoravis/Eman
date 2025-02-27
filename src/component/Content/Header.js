import React from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.css"; // CSS faylni qo‘shamiz

const Header = () => {
  return (
    <div className="content">
      <header>
        <div className="header">
          <h1>Exclusive</h1>

          {/* Navbar */}
          <ul className="header-ul">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign up</a></li>
          </ul>

          {/* Search & Icons */}
          <div className="header-icon">
            <div className="search-box">
              <input type="text" placeholder="What are you looking for?" />
              <FaSearch className="search-icon" />
            </div>
            <div className="icon">
              <div className="icon-container">
                <FaHeart />
                <span className="notification">4</span>
              </div>
              <FaShoppingCart />
              <FaUser />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
