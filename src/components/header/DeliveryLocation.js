import React from 'react';
import Icon from '@mdi/react';
import { mdiMapMarkerOutline } from '@mdi/js';

import './DeliveryLocation.scss';

function DeliveryLocation() {
  return (
    <div className="delivery-location">
      <Icon
        className="delivery-location__pin"
        path={mdiMapMarkerOutline}
        size={1.2}
      />
      <div className="delivery-location__details">
        <div className="delivery-location__hint">Hello</div>
        <div className="delivery-location__title">Select your address</div>
      </div>
    </div>
  );
}

export default DeliveryLocation;
