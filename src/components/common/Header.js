import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [type, setType] = useState(1);
  function gridMode() {
    setType(1);
    props.changeType(1);
  }
  function listMode() {
    setType(2);
    props.changeType(2);
  }
  if (props.isIssue) {
    return (
      <>
        <h1 className="has-centered-text">CommicBook</h1>
        <header>
          <div className="child is-issue">
            <NavLink exact to="/">
              Latest Issues
            </NavLink>
          </div>
        </header>
      </>
    );
  } else {
    return (
      <>
        <h1 className="has-centered-text">CommicBook</h1>
        <header>
          <div className="child">
            <NavLink exact to="/">
              Latest Issues
            </NavLink>
          </div>
          <div className="child">
            <span
              onClick={gridMode}
              className={type === 1 ? "has-icons is-selected" : "has-icons"}
            >
              <i className="fas fa-th-large"></i>Grid
            </span>
            <span
              onClick={listMode}
              className={type === 2 ? "has-icons is-selected" : "has-icons"}
            >
              <i className="fas fa-list"></i>List
            </span>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
