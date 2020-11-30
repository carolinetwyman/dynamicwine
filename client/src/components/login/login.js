import React from 'react';
import "./login.css";

export default class Login extends React.Component {

    render() {
        return (
            <div class="container col-md-4 col-md-offset-4">
                <form action="/submit" method="post">
                    <h2>Create A User</h2>
                    <input type="text" class="form-control" name="username" placeholder="username" autofocus></input>
                    <input type="text" class="form-control" name="password" placeholder="password" autofocus></input>
                    <input type="text" class="form-control" name="email" placeholder="email" autofocus></input>
                    <button class="btn btn-lg btn-primary btn-block" id="submit" type="submit">Submit</button>
                </form>
            </div>
        )
    }

}