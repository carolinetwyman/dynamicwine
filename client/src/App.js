import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Wines from "./pages/Wines";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
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

// function App() {
//   return (
//     <Router>

//         <Switch>
//           <Route exact path={["/", "/wines"]}>
//             <Wines />
//           </Route>
//           <Route exact path="/wines/:id">
//             <Detail />
//           </Route>
//           <Route>
//             <NoMatch />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
