import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Router from "./Route";

export default function Routes() {
  return (
    <Switch>
      <Router path="/" exact component={Dashboard} />
    </Switch>
  );
}
