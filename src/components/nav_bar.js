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
        <div className="navbar-item">
          <img src={logo} alt="Mini Jobify" />
        </div>
      </div>
      <div className="navbar-menu is-active">
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
