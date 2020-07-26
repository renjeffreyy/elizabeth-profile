import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadArt } from '../../actions/gallery.action';
import { showModal, hideModal } from '../../actions/modal.action';

import PropTypes from 'prop-types';

import './gallery.style.scss';

import ArtModal from '../artModal/art-modal.component';
import GalleryArt from '../gallery-art/gallery-art.component';
import Pagination from '../pagination/pagination.component';

const Gallery = ({ loadArt, art, showModal }) => {
  useEffect(() => {
    getArt();
  }, []);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const getArt = async () => {
    setLoading(true);
    loadArt();
    setLoading(false);
  };

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = art.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //if page is loading display loading
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <div className="gallery-container">
        {/* for texting multiple stock images */}
        {/* {currentPosts.map((art) => {
          return (
            <GalleryArt
              onClick={() => artImgClick(art.download_url)}
              key={art.id}
              url={art.download_url}
            />
          );
        })} */}

        {/* for testing art data from mongodb */}
        {currentPosts.map((art) => {
          return (
            <GalleryArt
              onClick={() => showModal(art)}
              key={art._id}
              url={art.url}
            />
          );
        })}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={art.length}
        paginate={paginate}
      />
      <ArtModal />
    </div>
  );
};

Gallery.propTypes = {
  art: PropTypes.array.isRequired,
  loadArt: PropTypes.func.isRequired,
  displayModal: PropTypes.bool.isRequired,
  modalData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  art: state.gallery.art,
  displayModal: state.modal.displayModal,
  modalData: state.modal.modalData,
});

export default connect(mapStateToProps, { loadArt, showModal, hideModal })(
  Gallery
);
