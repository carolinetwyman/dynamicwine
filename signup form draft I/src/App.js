import React from "react";
import Form from "./FormContainer";
import FormComponent from "./FormComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <LandingPage />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/frontpage" component={Frontpage} />
          <Route path="/newuser" exact component={newuser} />
          <Route path="/users" component={users} />
        </Switch>
      </div>
    </Router>
  )
}

export default App