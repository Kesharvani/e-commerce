import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import City_Store2 from "./Assets/City_Store3.png";

import {
  faSearch,
  faHeart,
  faCartPlus,
  faBars,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const City_Store2 =
  "https://images.freeimages.com/images/large-previews/46e/red-beetle-1416148.jpg";
export default function Header() {
  const [showLoginDetails, setLoginDetails] = useState(false);
  const [searchInputEnabled, setSearchInputEnabled] = useState(false);
  const breadcrumHandler = () => {
    setLoginDetails((prev) => !prev);
    setSearchInputEnabled(false);
  };
  const searchHandler = () => {
    setSearchInputEnabled((prev) => !prev);
    setLoginDetails(false);
  };
  return (
    <header className="header">
      <div className="darkBlock">
        <div className="container-fluid">
          <nav className="left-top-menu">
            <ul>
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>about</NavLink>
              </li>
              <li>
                <NavLink>sbout</NavLink>
              </li>
            </ul>
          </nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faUser} style={{ fontSize: "18px" }} />
              &#160;
              <NavLink to="/auth">Login/Signup</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="second-line">
        <div className="logo-container">
          <NavLink to="/">
            <img
              src={City_Store2}
              alt="store logo"
              width="70px"
              height="50px"
            />
          </NavLink>
        </div>

        <div className="wishlist-cart-button-container">
          <button className="search-icon-mobile" onClick={searchHandler}>
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "23px" }} />
          </button>
          <NavLink
            className={
              showLoginDetails || searchInputEnabled
                ? "wishlist-link link-disable"
                : "wishlist-link"
            }
            to="/wishlist"
          >
            <div className="nav-link">
              <FontAwesomeIcon icon={faHeart} style={{ fontSize: "23px" }} />
              <span className="text">My list</span>
            </div>
          </NavLink>
          <NavLink
            className={
              showLoginDetails || searchInputEnabled
                ? "cart-link link-disable"
                : "cart-link"
            }
            to="/cart"
          >
            <div className="nav-link">
              <FontAwesomeIcon icon={faCartPlus} style={{ fontSize: "23px" }} />
              <span className="text">My Cart</span>
            </div>
          </NavLink>
          <button className="hamburger-btn" onClick={breadcrumHandler}>
            {showLoginDetails ? (
              <FontAwesomeIcon icon={faTimes} style={{ fontSize: "27px" }} />
            ) : (
              <FontAwesomeIcon icon={faBars} style={{ fontSize: "23px" }} />
            )}
          </button>
        </div>

        <div className={searchInputEnabled ? "search" : "search-not-visible"}>
          <form>
            <input
              type="text"
              placeholder="Please Enter Text to Search"
              className="search-input"
            />
          </form>
        </div>
      </div>
      {showLoginDetails && (
        <div className="third-line">
          <nav className="menu-bar-mobile">
            <ul>
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>about</NavLink>
              </li>
              <li>
                <NavLink>sbout</NavLink>
              </li>
            </ul>
          </nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faUser} style={{ fontSize: "16px" }} />
              &#160;
              <NavLink to="/auth">Login/Signup</NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
