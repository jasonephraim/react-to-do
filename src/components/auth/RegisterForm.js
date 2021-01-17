import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function RegisterForm() {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const { firstName, lastName, username, password } = inputs;

  const onSubmit = () => {
    setSubmitted(true);
    console.log('submit');
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  return (
    <div className="col-lg-4 offset-lg-4">
      <h1>Register</h1>
      <Form name="RegisterForm" onSubmit={onSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={onChange}
            className={
              'form-control' + (submitted && !firstName ? ' is invalid' : '')
            }
          />
          {submitted && !firstName && (
            <div className="invalid-feedback">First name is required</div>
          )}
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={onChange}
            className={
              'form-control' + (submitted && !lastName ? ' is invalid' : '')
            }
          />
          {submitted && !lastName && (
            <div className="invalid-feedback">Last Name is required</div>
          )}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={onChange}
            className={
              'form-control' + (submitted && !username ? ' is invalid' : '')
            }
          />
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="on"
            value={password}
            onChange={onChange}
            className={
              'form-control' + (submitted && !password ? ' is invalid' : '')
            }
          />
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Link to="/" className="btn btn-link">
          Cancel
        </Link>
      </Form>
    </div>
  );
}

export default RegisterForm;
