import React, { Component } from 'react';
import axios from 'axios';

export class HistoryToday extends Component {
  //static displayName = "History Today";
  static historyTodayUrl =
    `${window.location.origin.toString()}` +
    '/api/utilproxy/proxy?url=' +
    'https://history.muffinlabs.com/date';
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var url =
      `${window.location.origin.toString()}` +
      '/api/utilproxy/proxy?url=' +
      'https://history.muffinlabs.com/date';
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>History Today</h1>
      </div>
    );
  }
}
