import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import { uploadArt } from '../../actions/gallery.action';

import './dashboard-upload.style.scss';

const DashboardUpload = ({ className, uploadArt }) => {
  const [uploadForm, setUploadForm] = useState({
    name: '',
    description: '',
    url: '',
    price: '',
  });

  const { name, description, url, price } = uploadForm;

  const onChange = (event) => {
    setUploadForm({ ...uploadForm, [event.target.name]: event.target.value });
    console.log(uploadForm);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    uploadArt(uploadForm);
  };
  return (
    <Form onSubmit={onSubmit} className={className}>
      <h1 className="dashboardUpload-h1-title">Upload New Art</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={name}
          onChange={onChange}
          type="text"
          placeholder="Name of Art"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          value={description}
          onChange={onChange}
          as="textarea"
          placeholder="Description"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image Url</Form.Label>
        <Form.Control
          name="url"
          value={url}
          onChange={onChange}
          type="text"
          placeholder="Image URL Here"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          name="price"
          value={price}
          onChange={onChange}
          type="number"
          placeholder="Price of Art"
          required
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default connect(null, { uploadArt })(DashboardUpload);
