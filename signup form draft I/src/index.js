import React, { Component } from "react";
import ReactDOM from "react-dom";
// import todosData from "./todosData";
import App from "./App";

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <App />
//             </div>
//         )
//     }
// }

// class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <p>Welcome{this.props.username}!</p>
//             </header>
//         )
//     }
// }

// class Greeting extends Component {
//     render() {
//         const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay

//         if (hours < 12) {
//             timeOfDay = "morning"
//         } else if (hours >= 12 && hours < 17) {
//             timeOfDay = "afternoon"
//         } else {
//             timeOfDay = "night"
//         }
//         return (
//             <h1>Good {timeOfDay} to you, sirmadam!</h1>
//         )
//     }
// }

ReactDOM.render(<App />, document.getElementById("root"));
