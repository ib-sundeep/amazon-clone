import React, { useEffect, useState } from 'react';

import './Products.scss';

import Loader from 'components/general/Loader';
import Error from 'components/general/Error';
import ProductCard from './ProductCard';
import { API_BASE } from 'utils/constants';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    if (loading || products.length > 0) return;

    setLoading(true);
    setError(null);

    try {
      const req = await fetch(API_BASE + '/products/');
      const json = await req.json();
      setProducts(json);
    } catch (_error) {
      setError(_error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader size={50} />;
  } else if (error) {
    return <Error message="Failed to load products" actionFn={loadProducts} />;
  } else {
    return (
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default Products;
