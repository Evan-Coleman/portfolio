import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
