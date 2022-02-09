import React from 'react';
import { Context1 } from './Context';

class Counter3 extends React.Component {
  // Convert this into Functional Component and check whether static contextType is working in Functional Component
  static contextType = Context1;
//   constructor() {
//     super();
//   }
  render() {
    console.log(this.context.initialValue);
    return (
      <>
        <h3> Counter 3 Component </h3>
        Initial Value : {this.context.initialValue} <br /> <br />
        <button onClick={this.context.handleIncrement}> Increment </button>{' '}
        &nbsp;
        <button onClick={this.context.handleDecrement}> Decrement </button>{' '}
        &nbsp;
        <button onClick={this.context.handleReset}>Reset</button>{' '}
        &nbsp;
      </>
    );
  }
}

export default Counter3;
