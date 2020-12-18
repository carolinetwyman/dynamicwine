import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container, Col } from 'reactstrap'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import axios from "axios";

export default function LogIn() {
  const [registerUsername, setRegisterUsername] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginUsername, setLoginUsername] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const login = () => {
    axios({
      method: "post",
      data:{
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "https://localhost:4000/login"
    }).then(res => console.log(res));
  };
  const register = () => {};
  const getUser = () => {};

  return (
    <Container>
    <Col lg={3}></Col>
    <Jumbotron className="login">
      <h2>Login</h2>
    <Form>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={e => setLoginUsername(e.target.value)} />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={e => setLoginPassword(e.target.value)} />
    </FormGroup>
    <Button className="btn btn-warning float-right" onClick={login}>Log In</Button>
    </Form>
    </Jumbotron>
    <Col lg={3}></Col>
    <Jumbotron className="login">
      <h2>Register</h2>
    <Form>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={e => setRegisterUsername(e.target.value)} />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={e => setRegisterPassword(e.target.value)} />
    </FormGroup>
    <Button className="btn btn-warning float-right" onClick={register}>Register</Button>
    </Form>
    </Jumbotron>
    <Col lg={3}></Col>
    <Jumbotron>
      <h2>Get User</h2>
      <Button className="btn btn-warning float-right" onClick={getUser}>Submit</Button>
    </Jumbotron>
    </Container>
  )
}

