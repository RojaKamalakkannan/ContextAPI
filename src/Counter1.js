import React from 'react';
import { Context1 } from './Context';
import Counter2 from './Counter2';
// React.useContext will work only in Functional Component, since useContext is React Hooks
function Counter1() {
  const getValuesFromProvider = React.useContext(Context1);
  return (
    <>
      <h3> Counter 1 Component </h3>
      Initial Value :{getValuesFromProvider.initialValue} <br /> <br />
      <button onClick={getValuesFromProvider.handleIncrement}>
        {' '}
        Increment{' '}
      </button>{' '}
      &nbsp;
      <button onClick={getValuesFromProvider.handleDecrement}>
        {' '}
        Decrement{' '}
      </button>{' '}
      &nbsp;
      <button onClick={getValuesFromProvider.handleReset}>
          {' '}
          Reset{' '}
      </button>{' '}
      &nbsp;
      <Counter2 />
    </>
  );
}

export default Counter1;
