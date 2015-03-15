import React from 'react';
import Test from './Test';
import Welcome from './Welcome';

export default class Nim extends React.Component {
  constructor() {
    this.state = {
      welcome: true,
      targetNumber: 0
    };
  }

  render() {
    var display;
    console.log(this.state.welcome);
    if (this.state.welcome) {
      display = <Test />;
    } else {
      display = <Welcome />;
    }

    return (
      <Welcome />
    );
  }
}