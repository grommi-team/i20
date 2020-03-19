import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, redirecTo } from "react-router-dom";

import "assets/scss/valigo-design-react.scss?v=1.8.0";

// pages for this product
import Admin from "modules/admin/Admin";
import Client from "modules/client/Client";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Client} />
      {/* <Route path="" redirecTo={}  /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
