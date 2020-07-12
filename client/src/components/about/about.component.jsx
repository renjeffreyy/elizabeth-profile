import React from 'react';

import './about.style.scss';

import AboutText from '../about-text/about-text.component';
import Banner from '../banner/banner.component';

const About = () => {
  return (
    <div>
      <Banner title="About Me" />
      <AboutText />
    </div>
  );
};
export default About;
