import React from 'react';
import Icon from '@mdi/react';
import { mdiCurrencyInr } from '@mdi/js';
import classNames from 'classnames';

import './CurrencyFormat.scss';

const currenyCodeIconMap = {
  INR: mdiCurrencyInr,
};

const currencyCodeLocaleMap = {
  INR: 'en-IN',
};

function CurrencyFormat({ className, value, currencyCode, iconSize = 1 }) {
  return (
    <div className={classNames('currency-format', className)}>
      <Icon path={currenyCodeIconMap[currencyCode]} size={iconSize} />
      <span className="currency-format__value">
        {value.toLocaleString(currencyCodeLocaleMap[currencyCode])}
      </span>
    </div>
  );
}

export default CurrencyFormat;
