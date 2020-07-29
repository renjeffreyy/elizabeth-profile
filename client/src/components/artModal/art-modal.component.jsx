import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import './art-modal.style.scss';
import { addToCart } from '../../actions/cart.action';
import { hideModal } from '../../actions/modal.action';

const ArtModal = ({
  hideModal,
  displayModal,
  url,
  title,
  price,
  description,
  addToCart,
  id,
}) => {
  return (
    <div>
      <Modal
        onHide={() => hideModal()}
        show={displayModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <img className="modal-img" src={url} alt="Elizabeth's art" />
        </Modal.Body>
        <Modal.Body className="modal-body-description">
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <p className="modal-footer-price">Price: ${price}</p>

          <Button
            onClick={() =>
              addToCart({
                id: id,
                url: url,
                title: title,
                price: price,
                quantity: 1,
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

const mapStateToProps = (state) => ({
  displayModal: state.modal.displayModal,
  title: state.modal.modalData.title,
  url: state.modal.modalData.url,
  price: state.modal.modalData.price,
  description: state.modal.modalData.description,
  id: state.modal.modalData.id,
});

export default connect(mapStateToProps, { hideModal, addToCart })(ArtModal);
