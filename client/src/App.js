import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import FrontPage from "./pages/frontPage/frontPage.js";
import LogIn from "./pages/login/login.js"

export default function App() {
  return (
    <Router>
      <Route path="/" component={FrontPage} exact />
      <Route path="/login" component={LogIn} />
    </Router>
  );
}
