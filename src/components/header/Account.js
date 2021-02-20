import React from 'react';
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js';

import './Account.scss';

function Account() {
  return (
    <div className="account">
      <div className="account__hint">Hello, Sign in</div>
      <div className="account__title">
        My Account
        <Icon className="account__arrow" path={mdiMenuDown} size={1.2} />
      </div>
    </div>
  );
}

export default Account;
