import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => alert(err.message)
    );
    return <div> Latitude</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
