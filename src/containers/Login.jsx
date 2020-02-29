import React from "react";
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className="splash-container">
      <div className="card ">
        <div className="card-header text-center">
          <Link to="/" >
            <img
              className="logo-img"
              src=""
              alt="J SHOPPING"
            />
          </Link>
          <span className="splash-description">
            Please enter your user information.
          </span>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                autocomplete="off"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label className="custom-control custom-checkbox">
                <input className="custom-control-input" type="checkbox"/>
                  <span className="custom-control-label" >
                  Remember Me
                </span>
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Sign in
            </button>
          </form>
        </div>
        <div className="card-footer bg-white p-0  ">
          <div className="card-footer-item card-footer-item-bordered">
            <Link to="/register" className="footer-link">
              Create An Account
            </Link>
          </div>
          <div className="card-footer-item card-footer-item-bordered">
            <a href="#" className="footer-link">
              Forgot Password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
