import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { Link, useNavigate } from "@reach/router";

//icons
import { AiOutlineUser } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [theme] = useThemeHook();
    const navigate = useNavigate();
    const [message,setMessage] = useState('')

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        
        if (email && password) {
            setLoading(true);
            fetch('http://127.0.0.1:9292/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
                .then(res => {
                    if (res.status === 400) {
                        throw new Error('Missing email or password');
                    }
                    return res.json();
                })
                .then(data => {
                    sessionStorage.setItem('token', data.token);
                    setLoading(false);
                    navigate('/', { replace: true });
                    alert(setMessage(data.success));
                })
                .catch(error => {
                    setLoading(false);
                    console.error(error);
                    alert('An error occurred while logging in');
                });


        }
    }
    return (
        <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme ? 'text-light bg-dark' : 'text-black bg-light'}`}>
                    <h1 className={`text-center border-bottom pb-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
                        Sign in
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-4 mt-5">
                            <InputGroup.Text>
                                <AiOutlineUser size="1.8rem" />
                            </InputGroup.Text>
                            <Form.Control name="email" type="text" placeholder="email" minLength={3} required />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <InputGroup.Text>
                                <VscKey size="1.8rem" />
                            </InputGroup.Text>
                            <Form.Control name="password" type="password" placeholder="Password" minLength={4} required />
                        </InputGroup>
                        <Button
                            type="submit"
                            className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
                            disabled={loading}
                            style={{ border: 0 }}
                        >
                            {loading ?
                                <>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    &nbsp;Loading...
                                </> : 'Log in'
                            }
                        </Button>
                        <Form.Group className="mt-3 text-center">
                            <Form.Text className="text-muted fw-bold">
                                New to Alimama?
                            </Form.Text>
                            <Row className="py-2 border-bottom mb-3" />
                            <Link to='/register' className="btn btn-info rounded-0">
                                Create your Alimama account
                            </Link>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;