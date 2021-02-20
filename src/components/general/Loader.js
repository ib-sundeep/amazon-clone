import React from 'react';

import './Loader.scss';

function Loader({ size }) {
  return (
    <div className="loader">
      <div className="loader__icon" style={{ width: size, height: size }} />
    </div>
  );
}

export default Loader;
