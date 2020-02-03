import React from "react";
import HomePage from "./home/HomePage";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageIssuePage from "./issues/ManageIssuePage";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route name="issue" path="/issue/:id" component={ManageIssuePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
