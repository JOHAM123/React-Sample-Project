import React from "react";
import { Link } from "react-router-dom";
import Notification from "../components/header/Notification";
import NavUser from "../components/header/NavUser";

export default function Header() {
  return (
    <div className="dashboard-header">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <Link className="navbar-brand" to="/">
          J Shopping
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right-top">
            <li className="nav-item">
              <div id="custom-search" className="top-search-bar">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search.."
                />
              </div>
            </li>
            <Notification />
            <NavUser />
          </ul>
        </div>
      </nav>
    </div>
  );
}
