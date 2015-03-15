import React from 'react';
import Test from './Test';

export default class Nim extends React.Component {
  getInitialState() {
    return ({
      welcome: true,
      targetNumber: 0
    });
  }

  render() {
    return (
      <Test />
    );
  }
}