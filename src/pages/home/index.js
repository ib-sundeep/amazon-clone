import React from 'react';

import './index.scss';

import Banner from './Banner';
import Products from './Products';

function HomePage() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Products />
      </div>
    </div>
  );
}

export default HomePage;
