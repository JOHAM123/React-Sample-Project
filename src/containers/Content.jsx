import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Product from "../components/product/";
import Category from "../components/category/";
import User from "../components/user/";
export default function Content() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/product/:page" component={Product} />
      <Route exact path="/category/:page" component={Category} />
      <Route exact path="/user/:page" component={User} />
    </React.Fragment>
  );
}
