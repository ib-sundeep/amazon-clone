import React from 'react';
import Icon from '@mdi/react';
import { mdiStar, mdiStarOutline } from '@mdi/js';
import classNames from 'classnames';

import './Rating.scss';

function Rating({ rating, maxRating, size = 1.6 }) {
  return (
    <div className="rating"> 
      {new Array(maxRating).fill(0).map((_, index) => {
        const isActive = rating >= index + 1;
        return (
          <Icon
            key={index}
            className={classNames('rating__star', {
              'rating__star--active': isActive,
            })}
            size={size}
            path={isActive ? mdiStar : mdiStarOutline}
          />
        );
      })}
    </div>
  );
}

export default Rating;
