import React from 'react';
import Carousel from 'nuka-carousel';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import './Banner.scss';

const banners = [
  'https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Feb/NC/D21052619_WLA_BAU_GW-heroes_Headsets_FPF_FEB_DesktopTallHero_3000x1200._CB660350658_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MI/Final/MI_Gw_3000x1200._CB659658858_.jpg',
];

function Banner() {
  return (
    <div className="h-banner">
      <div className="h-banner__carousel">
        <Carousel
          autoplay
          autoplayReverse
          className="h-banner"
          renderCenterLeftControls={({ previousSlide }) => (
            <Icon
              className="h-banner__control"
              size={5}
              path={mdiChevronLeft}
              onClick={previousSlide}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Icon
              className="h-banner__control"
              size={5}
              path={mdiChevronRight}
              onClick={nextSlide}
            />
          )}
          renderBottomCenterControls={() => null}
        >
          {banners.map((bannerSrc, index) => (
            <img key={index} alt={`Banner ${index + 1}`} src={bannerSrc} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
