import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="nav-left-sidebar sidebar-dark">
      <div className="menu-list">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="d-xl-none d-lg-none" to="#">
            Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-divider">Menu</li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fa fa-fw fa-user-circle"></i>Dashboard{" "}
                  <span className="badge badge-success">6</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  data-toggle="collapse"
                  aria-expanded="false"
                  data-target="#submenu-1"
                  aria-controls="submenu-1"
                >
                  <i className="fas fa-fw fa-table"></i>Orders
                </Link>
                <div id="submenu-1" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="pages/general-table.html">
                        New Orders
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="pages/data-tables.html">
                        Order Report
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  data-toggle="collapse"
                  aria-expanded="false"
                  data-target="#submenu-2"
                  aria-controls="submenu-2"
                >
                  <i className="fas fa-fw fa-table"></i>Category
                </Link>
                <div id="submenu-2" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="/category/manageCategory">
                        Manage Category
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/category/manageSubCategory">
                        Manage SubCategory
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/category/manageFeatures">
                        Manage Features
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  data-toggle="collapse"
                  aria-expanded="false"
                  data-target="#submenu-3"
                  aria-controls="submenu-3"
                >
                  <i className="fas fa-fw fa-table"></i>Products
                </Link>
                <div id="submenu-3" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="/product/manageProduct">
                        Manage Product
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-divider">Others</li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  data-toggle="collapse"
                  aria-expanded="false"
                  data-target="#submenu-4"
                  aria-controls="submenu-4"
                >
                  <i className="fas fa-fw fa-table"></i>Users
                </Link>
                <div id="submenu-4" className="collapse submenu">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link className="nav-link" to="/user/manageUser">
                        Manage User
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/user/manageRoles">
                        Manage Roles
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
