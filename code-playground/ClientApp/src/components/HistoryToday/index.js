import React, { Component } from 'react';
import axios from 'axios';

export class HistoryToday extends Component {
  //static displayName = "History Today";
  static historyTodayUrl = 'https://history.muffinlabs.com/date';
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   axios.defaults.headers.post['Content-Type'] =
  //     'application/json;charset=utf-8';
  //   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  //   axios
  //     .get('//history.muffinlabs.com/date')
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  componentDidMount() {
    fetch('https://history.muffinlabs.com/date', {
      crossDomain: true,

      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div>
        <h1>History Today</h1>
      </div>
    );
  }
}
