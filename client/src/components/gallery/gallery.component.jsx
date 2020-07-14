import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadArt } from '../../actions/gallery.action';
import PropTypes from 'prop-types';

import './gallery.style.scss';

import ArtModal from '../artModal/art-modal.component';
import GalleryArt from '../gallery-art/gallery-art.component';
import Pagination from '../pagination/pagination.component';

const Gallery = ({ loadArt, art }) => {
  useEffect(() => {
    getArt();
  }, []);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [modalShow, setModalShow] = useState(false);
  const [modalArt, setModalArt] = useState('');

  const getArt = async () => {
    setLoading(true);
    loadArt();
    setLoading(false);
  };

  const artImgClick = (url) => {
    setModalArt(url);
    setModalShow(true);
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
        {currentPosts.map((art) => {
          return (
            <GalleryArt
              onClick={() => artImgClick(art.download_url)}
              key={art.id}
              url={art.download_url}
            />
          );
        })}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={art.length}
        paginate={paginate}
      />
      <ArtModal
        url={modalArt}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

Gallery.propTypes = {
  art: PropTypes.array.isRequired,
  loadArt: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ art: state.gallery.art });

export default connect(mapStateToProps, { loadArt })(Gallery);
