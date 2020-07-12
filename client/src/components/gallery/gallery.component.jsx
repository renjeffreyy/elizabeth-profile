import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './gallery.style.scss';

import ArtModal from '../artModal/art-modal.component';
import GalleryArt from '../gallery-art/gallery-art.component';
import Pagination from '../pagination/pagination.component';

const Gallery = () => {
  useEffect(() => {
    getArt();
  }, []);

  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [modalShow, setModalShow] = useState(false);
  const [modalArt, setModalArt] = useState('');

  const getArt = async () => {
    setLoading(true);
    const art = await axios.get('https://picsum.photos/v2/list');
    setGalleryData([...galleryData, ...art.data]);
    setLoading(false);
  };

  const artImgClick = (url) => {
    setModalArt(url);
    setModalShow(true);
  };

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = galleryData.slice(indexOfFirstPost, indexOfLastPost);

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
        totalPosts={galleryData.length}
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

export default Gallery;
