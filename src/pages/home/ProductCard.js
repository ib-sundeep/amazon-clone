import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.scss';

import CurrencyFormat from 'components/general/CurrencyFormat';
import Rating from 'components/general/Rating';
import AddToCard from 'components/product/AddToCart';
import { calculatePriceDetails } from 'utils/product';

function ProductCard({ className, product }) {
  const { finalPrice, basePrice, isDiscounted } = calculatePriceDetails(
    product.price,
  );

  return (
    <div className="product-card-wrapper">
      <div className={`product-card ${className}`}>
        <div className="product-card__title">{product.title}</div>
        <div className="product-card__price">
          <CurrencyFormat
            className="product-card__amount"
            currencyCode={product.price.currency}
            value={finalPrice}
          />
          {isDiscounted && (
            <CurrencyFormat
              className="product-card__amount product-card__amount--discount"
              currencyCode={product.price.currency}
              value={basePrice}
            />
          )}
        </div>

        <div className="product-card__rating">
          <Rating rating={product.rating.value} maxRating={5} />
          <div className="product-card__rating-count">
            {product.rating.count} ratings
          </div>
        </div>

        <Link to={`/product/${product.id}`} className="product-card__gallery">
          <img
            className="product-card__image"
            alt={product.title}
            src={product.images[0]}
          />
        </Link>

        <div className="product-card__actions">
          <AddToCard product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
