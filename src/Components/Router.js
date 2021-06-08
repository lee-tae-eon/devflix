/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import Tv from "Routes/Tv";
import Header from "./Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={Tv} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
