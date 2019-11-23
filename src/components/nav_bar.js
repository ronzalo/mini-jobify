import React from "react";
import SearchBar from "./search_bar";
import logo from "../logo.png";

export default function NavBar(props) {
  return (
    <nav
      className="navbar is-dark is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src={logo} />
        </a>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <SearchBar
              searchHandle={props.searchHandle}
              searchText={props.searchText}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
