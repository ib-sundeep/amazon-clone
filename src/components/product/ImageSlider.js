import React, { useEffect, useState } from 'react';

import './ImageSlider.scss';

function ImageSlider({ product }) {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState('');
  useEffect(
    function () {
      setImages(product.images);
      if (product.images) {
        setImage(product.images[0]);
      } else {
        setImage('');
      }
    },
    [product],
  );

  const imageClick = (src) => {
    setImage(src);
  };
  return null;
}

export default ImageSlider;
