import React, { Component } from 'react';
import Tickers from './Tickers';
export class CryptoCurrencyReader extends Component {
  render() {
    return (
      <div>
        <h2>Cryptocurrency Ticker</h2>
        <Tickers />
      </div>
    );
  }
}
