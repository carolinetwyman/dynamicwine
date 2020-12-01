import React from 'react';
import "./login.css";
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './Error';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import Reactstrap from 'reactstrap';


const validationSchema = Yup.object().shape({
    
    email: Yup.string()
        .email("Must be a valid email address")
        .max(255, "Must be shorter than 255")
        .required("Must enter an email"),
    password: Yup.string()
        .min(1, "Must have a character")
        .max(25, "Must be shorter than 25")
        .required("Must enter a password"),
});

export default function Login() {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
//axios here...instead of setTimeout
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({
                values, 
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit, 
                isSubmitting 
            }) => (
                <Container className="wine">
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col  sm={{ size: 'auto', offset: 1 }}>
                        <div className='input-row'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter your email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={touched.email && errors.email ? 'has-error'
                                : null}
                            />
                            <Error touched={touched.email} message={errors.email} />
                        </div>
                        </Col>
                    </Row>

                    <div className='input-row'>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='text'
                            name='password'
                            id='password'
                            placeholder='Enter your password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className={touched.password && errors.password ?
                                'has-error' : null}
                        />
                        <Error touched={touched.password} message={errors.password} />
                    </div>

                    <div className='input-row'>
                        <Jumbotron>
                        <Button color="primary" type='submit' disabled={isSubmitting}>Submit</Button>{' '}
                        </Jumbotron>
                    </div>

                </form>
                
                </Container>
            )}
        </Formik>
    )
}