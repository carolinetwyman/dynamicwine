import React from 'react';
//import '../../pages/FrontPage/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row } from 'reactstrap';
import "./login.css";

export default function Login() {
    return (
            <Container className="wine">
                    <Row> 
                        {/* <Col  sm={{ size: 'auto', offset: 1 }}> */}
                        <div className='input-row'>
                            <label htmlFor='email' />
                            <input
                                type='email'
                                name='email'
                                id='email'
                                />
                            <label htmlFor='password' />
                            <input
                                type='text'
                                name='password'
                                id='password'
                                placeholder='Enter your password'
                        />
                        <Button className="button"  type='submit' >Sign In</Button>{' '}
                        </div>
                    </Row>
                </Container>
            )}