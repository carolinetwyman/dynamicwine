// import logo from './logo.svg';
import React from 'react';
//import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import frontPage from './pages/frontPage/frontPage.js';
import bottleInfo from './pages/bottleInfo/bottleInfo.js';
// import reactstrap from "reactstrap";


function App() {
  return (
   <Router>
     <Route path="/" component={frontPage} exact />
     <Route path="/bottleInfo" component={bottleInfo} />
   </Router>
  );
}

export default App;
