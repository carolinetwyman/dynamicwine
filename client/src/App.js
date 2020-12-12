import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FrontPage from "./pages/frontPage/frontPage.js";
import Suggest from "./pages/suggest/suggest.js";
import Login from "./pages/login/login.js";

export default function App() {
  return (
    <Router>
      <Route path="/" component={FrontPage} exact />
      <Route path="/suggest" component={Suggest} exact />
      <Route path="/login" component={Login} exact />
    </Router>
  );
}

