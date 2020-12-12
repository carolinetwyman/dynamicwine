import React from "react";
import "./login.css";

// export default function Login() {

//   return (
//     <div className="body">
//         <form class="form-signin">
//           <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
//           <label for="inputEmail" class="sr-only">Email address</label>
//           <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
//           <label for="inputPassword" class="sr-only">Password</label>
//           <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
//           <div class="checkbox mb-3">
//             <label>
//               <input type="checkbox" value="remember-me" /> Remember me
//             </label>
//           </div>
//           <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
//           <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
//         </form>
//     </div>
//   );
// }

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}