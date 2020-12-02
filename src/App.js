import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router";

import Login from "./Login";
import Register from "./Registeration";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">Hey this is the home page</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
