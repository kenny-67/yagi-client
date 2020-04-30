import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "./logo.png";

import RegisteredMembers from "../components/RegisteredMembers";

const Header = (props) => {
  return (
    <header className="bg-text">
      <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink to="/" className="navbar-brand">
          <img src={Logo} alt="YAGI" width="100px" />
        </NavLink>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          // aria-controls="navbarSupportedContent"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto white">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact={true}>
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              {props.state && (
                <NavLink className="nav-link" to="/members">
                  members
                </NavLink>
              )}
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
