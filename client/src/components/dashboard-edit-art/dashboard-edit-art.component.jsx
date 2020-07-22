import React from 'react';
import PropTypes from 'prop-types';
import ArtListItem from '../art-list-item/art-list-item.component';
import { connect } from 'react-redux';
import ArtModal from '../artModal/art-modal.component';
import { showModal, hideModal } from '../../actions/modal.action';
import './dashboard-edit-art.style.scss';
import { deleteArt } from '../../actions/gallery.action';

const DashboardEditArt = ({
  art,
  showModal,
  hideModal,
  displayModal,
  modalData,
  deleteArt,
}) => {
  const { url, title, description, price } = modalData;

  return (
    <div>
      <h1 className="editart-h1-title">Your Art</h1>
      <div className="editArt-listItem-container">
        {art.map((artItem) => {
          return (
            <ArtListItem
              key={artItem._id}
              imgUrl={artItem.url}
              description={artItem.artDescription}
              title={artItem.artName}
              price={artItem.price}
              imgClick={() => showModal(artItem)}
              btnClick={() => deleteArt(artItem._id)}
            />
          );
        })}
      </div>
      <ArtModal
        url={url}
        show={displayModal}
        onHide={() => hideModal()}
        title={title}
        description={description}
        price={price}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  art: state.gallery.art,
  displayModal: state.modal.displayModal,
  modalData: state.modal.modalData,
});

DashboardEditArt.propTypes = {
  art: PropTypes.array.isRequired,
  displayModal: PropTypes.bool.isRequired,
  modalData: PropTypes.object.isRequired,
  deleteArt: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { hideModal, showModal, deleteArt })(
  DashboardEditArt
);
