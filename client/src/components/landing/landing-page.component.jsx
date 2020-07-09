import React from 'react';
import './landing-page.style.scss';

import Gallery from '../gallery/gallery.component';
import Searchbar from '../searchbar/searchbar.component';

const LandingPage = () => {
  return (
    <div>
      <Searchbar />
      <Gallery />
    </div>
  );
};

export default LandingPage;
