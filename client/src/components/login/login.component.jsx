import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import SetAuthToken from '../../utils/set-auth-token.util';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/auth.action';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './login.style.scss';

const Login = ({ isAuthenticated, loginUser }) => {
  useEffect(() => {
    SetAuthToken(localStorage.token);
  }, []);

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginForm;

  const onChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      loginUser(loginForm);
    } catch (error) {
      console.error(error);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-container">
      <Form className="login-form" onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={email}
            onChange={onChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={password}
            onChange={onChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStatetoProps, { loginUser })(Login);
