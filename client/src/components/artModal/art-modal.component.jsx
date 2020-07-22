import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './art-modal.style.scss';
import { addToCart } from '../../actions/cart.action';

const ArtModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <img className="modal-img" src={props.url} alt="Elizabeth's art" />
        </Modal.Body>
        <Modal.Body className="modal-body-description">
          <p>{props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <p className="modal-footer-price">Price: ${props.price}</p>

          <Button
            onClick={() =>
              addToCart({
                url: props.url,
                quantity: 1,
                title: props.title,
                price: props.price,
              })
            }
          >
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ArtModal;
