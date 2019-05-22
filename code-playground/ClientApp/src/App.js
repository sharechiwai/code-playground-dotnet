import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { CryptoCurrencyReader } from './components/CryptoCurrencyReader/CryptoCurrencyReader';
import { HistoryToday } from './components/HistoryToday';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/coins" component={CryptoCurrencyReader} />
        <Route path="/history-today" component={HistoryToday} />
      </Layout>
    );
  }
}
