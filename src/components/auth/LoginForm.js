import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginForm() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const { username, password } = inputs;

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
      <h1>Log In</h1>
      <Form name="loginForm" onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
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

        <Form.Group controlId="formBasicPassword">
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
          Login
        </Button>
        <Link to="/register" className="btn btn-link">
          Register
        </Link>
      </Form>
    </div>
  );
}

export default LoginForm;
