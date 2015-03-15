import React from 'react';

export class Welcome extends React.Component {

  handleClick() {
    this.setState({welcome: false, targetNumber: 0});
  }

  render() {
    return (
      <div className="col-xs-offset-3 col-xs-6">
        <h1>Welcome to NimBot, the computer you can't beat</h1>
        <a href="https://en.wikipedia.org/wiki/Nim">
          Nim is a mathematical game of strategy in which two players take turns removing objects from distinct heaps.
        </a>
        <p>
          This is a nimbot that will play a variation of the game 100. You choose a target number between 11 and 100 and then take turns choosing a number between 1 and 10 that adds to a cumulative total. Whichever players reaches the target number first wins.
        </p>
        <button onClick={this.handleClick.bind(this)}>Get Started</button>

      </div>
    );
  }
}