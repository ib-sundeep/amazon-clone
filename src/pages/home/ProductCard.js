import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './ProductCard.scss';

import CurrencyFormat from 'components/general/CurrencyFormat';
import Rating from 'components/general/Rating';
import { useCartDispatch } from '../../cart-context'



function ProductCard({ className, product }) {
  const basePrice = parseInt(product.price.value, 10);
  const finalPrice = parseInt(
    (basePrice * (100 - product.price.discount)) / 100,
    10,
  );
  const dispatch = useCartDispatch()

  return (
    <div className="product-card-wrapper">
      <div className={classNames('product-card', { [className]: className })}>
        <div className="product-card__title">{product.title}</div>
        <div className="product-card__price">
          <CurrencyFormat
            className="product-card__amount"
            currencyCode={product.price.currency}
            value={finalPrice}
          />
          {basePrice !== finalPrice && (
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
          <button className="product-card__button" onClick={() => dispatch({ type: 'increment', item: product })}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
