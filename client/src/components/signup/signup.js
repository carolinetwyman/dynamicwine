import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row } from 'reactstrap';
import "./signup.css";

export default function Signup() {
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
                        <Button className="button"  type='submit' >Sign Up</Button>{' '}
                        </div>
                    </Row>
                </Container>
            )}