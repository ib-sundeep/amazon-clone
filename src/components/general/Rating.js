import React from 'react';
import Icon from '@mdi/react';
import { mdiStar, mdiStarOutline } from '@mdi/js';

import './Rating.scss';

function Rating({ rating, maxRating, size = 1.2 }) {
  return (
    <div className="rating">
      {new Array(maxRating).fill(0).map((_, index) => {
        const isActive = rating >= index + 1;
        return (
          <Icon
            key={index}
            className={`rating__star ${isActive ? 'rating__star--active' : ''}`}
            size={size}
            path={isActive ? mdiStar : mdiStarOutline}
          />
        );
      })}
    </div>
  );
}

export default Rating;
