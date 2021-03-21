import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageSlider from '../../components/product/ImageSlider';
import Information from '../../components/product/Information';
import './index.scss';

import { API_BASE } from 'utils/constants';
import Error from 'components/general/Error';
import Loader from 'components/general/Loader';

function ProductPage() {
  let { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProduct = async () => {
    if (loading || product) return;

    setLoading(true);
    setError(null);

    try {
      const req = await fetch(`${API_BASE}/products/${productId}/`);
      const json = await req.json();
      setProduct(json);
    } catch (_error) {
      setError(_error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  if (loading) {
    return <Loader size={50} />;
  } else if (error) {
    return <Error message="Failed to load products" actionFn={loadProduct} />;
  } else if (product) {
    return (
      <div className="product">
        <ImageSlider product={product} />
        <Information product={product} />
      </div>
    );
  } else {
    return null;
  }
}

export default ProductPage;
