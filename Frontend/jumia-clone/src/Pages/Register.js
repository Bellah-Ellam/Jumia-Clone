import React, { useState } from 'react';
import { useNavigate } from '@reach/router';
import { Container, Row, Col, Button, Form, Spinner, InputGroup } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/high-res.css';

const Register = () => {
  const [loading, setLoading] = useState(false);
//   const [number, setNumber] = useState(null);
  const [theme] = useThemeHook();
  const nav = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const username = form.username.value;
    const password = form.password.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
  
    if (username && password && firstName && lastName && email) {
      setLoading(true);
  
      try {
        const response = await fetch('http://127.0.0.1:9292/users/add_user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
            firstName,
            lastName,
            email,
           
          }),
        });
  
        if (response.ok) {
          console.log('User added successfully');
          // Perform any necessary actions after successful user addition
          nav("sign-in");
        } else {
          console.log('Failed to add user');
          // Handle the error case, display a message, or take appropriate actions
        }
      } catch (error) {
        console.log('Error occurred while adding user', error);
        // Handle the error case, display a message, or take appropriate actions
      } finally {
        setLoading(false);
      }
    } else {
      console.log('Please fill in all required fields');
    }
  };
  

  return (
    <Container className="py-5 mt-5">
      <Row className="justify-content-center mt-5">
        <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme ? 'text-light bg-dark' : 'text-black bg-light'}`}>
          <h1 className={`text-center border-bottom pb-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
            Create Account
          </h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstName" type="text" placeholder="First name" required />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6">
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastName" type="text" placeholder="Last name" required />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control name="username" type="text" placeholder="Username" minLength={3} required />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" minLength={6} required />
            </Form.Group>
            <Button
              type="submit"
              className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
              disabled={loading}
              style={{ border: 0 }}
            >
              {loading ? (
                <>
                  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                  &nbsp;Loading...
                </>
              ) : (
                'Continue'
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
