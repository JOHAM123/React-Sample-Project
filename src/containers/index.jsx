import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import Login from './Login';
export default function index() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <div className="dashboard-main-wrapper">
        <Header />
        <Sidebar />
        <div className="dashboard-wrapper">
          <Content />
          <Footer />
        </div>
      </div>
    </Switch>
  );
}
