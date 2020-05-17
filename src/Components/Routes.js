import React from "react";
import { Route, Switch } from "react-router-dom";

import Board from "../Routes/Board";
import BoardText from "../Routes/BoardText";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Board} />
    <Route path="/BoardText" component={BoardText} />
  </Switch>
);

const AppRouter = () => <LoggedInRoutes />;

export default AppRouter;
