import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { sendMessage } from '../../actions/contact.action';
import { setAlert } from '../../actions/alert.action';

import Banner from '../banner/banner.component';

import './contact.style.scss';

const Contact = ({ sendMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (name === '' || email === '' || message === '') {
      return setAlert({
        msg: 'Please fill out all input fields',
        variant: 'danger',
      });
    }
    sendMessage(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <Banner title="Let's Talk" />
      <div className="contact-form-container">
        <Form className="contact-form" onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Name*</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter full name"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address*</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message*</Form.Label>
            <Form.Control
              name="message"
              value={message}
              onChange={onChange}
              placeholder="Enter a message"
              as="textarea"
              rows="3"
              required
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

Contact.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { sendMessage })(Contact);
