import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import MyPdfViewer from "./components/MyPdfViewer";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={MyPdfViewer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
