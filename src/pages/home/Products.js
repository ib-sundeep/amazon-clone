import React, { useCallback, useEffect, useState } from 'react';

import './Products.scss';

import productsApi from 'api/products';
import Loader from 'components/general/Loader';
import Error from 'components/general/Error';
import ProductCard from './ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  const loadProducts = useCallback(async () => {
    const json = await productsApi.getList();
    setProducts(json);
    console.log(json);
  })

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return null;
}

export default Products;
