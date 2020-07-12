import React from 'react';

import './banner.style.scss';

const Banner = (props) => {
  return (
    <div className="banner-hero-div">
      <p className="banner-hero-title">{props.title}</p>
    </div>
  );
};

export default Banner;
