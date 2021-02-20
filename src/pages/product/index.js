import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ImageSlider from '../../components/product/ImageSlider';
import Information from '../../components/product/Information';

function ProductPage() {
  const [product, setProduct] = useState({});
  let { productId } = useParams();
  useEffect(function () {
    console.log(productId);
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products/" + productId).then(
      function (data) {
        return (data.json());
      }
    ).then(function (data) {
      setProduct(data);
    })
  }, [])
  return (
    <>
      {<ImageSlider product={product} />}
      {<Information product={product} />}
    </>
  );
}

export default ProductPage;
