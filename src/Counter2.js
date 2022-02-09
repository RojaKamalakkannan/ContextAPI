import React from 'react';
import { Context1 } from './Context';
import Counter3 from './Counter3';


function Counter2() {
   
    return (
      <div>
        <Context1.Consumer>
           {(getValuesFromProvider) => {
          return (
            <div>
              <h3> Counter 2 Component </h3>
              Initial Value : {getValuesFromProvider.initialValue} <br /> <br />
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
              <Counter3 />
            </div>
          );
        }}
      </Context1.Consumer>       
      </div>
    );
  }
export default Counter2;
