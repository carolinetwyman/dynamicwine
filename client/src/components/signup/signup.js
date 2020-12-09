import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row } from 'reactstrap';
import "./signup.css";
import axios from 'axios';

export default class Signup extends React.Component {
    state = {
        password: "",
        email: ""
    }
    handleChange = (e) => {
        var value = e.target.value;
        var id = e.target.id
        this.setState({ ...this.state, [id]: value })
    }
    render() {
        return (
            <Container className="wine">
                <Row>
                    {/* <Col  sm={{ size: 'auto', offset: 1 }}> */}
                    <div className='input-row'>
                        <label htmlFor='email' />
                        <input onChange={this.handleChange}
                            type='email'
                            value={this.state.email}
                            name='email'
                            id='email'
                        />
                        <label htmlFor='password' />
                        <input onChange={this.handleChange}
                            type='text'
                            value={this.state.password}
                            name='password'
                            id='password'
                            //placeholder='Enter your password'
                        />
                        {this.handleClick = (event) => {
                            console.log('iclicked')
                            event.preventDefault();
                            const user = {
                                email: this.state.email,
                            };

                            axios.post(`mongodb://localhost/winelist/users`, { user })
                                .then(res => {
                                    console.log(res);
                                    console.log(res.data);
                                })
                        }
                        }
                        <Button onClick={this.handleClick} className="button" type='submit' >Sign Up</Button>{' '}
                    </div>
                </Row>
            </Container>
        )
    }
}